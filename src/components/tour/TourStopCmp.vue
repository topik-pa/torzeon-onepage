<template>
  <div class="stop" :class="{'private': stop.type=='private' }">
    <div class="title">
      <h3>
        {{ $t("message.goals."+stop.popup) }}
      </h3>
      <h2>{{stop.id + 1}}<span>/{{this.$store.getters.getDefaultTour.stopsTotal}}</span> - {{stop.name}}</h2>
      <a target="_blank" class="btn secondary" :href="stop.gmapsLocation"><i class="fas fa-map-marker-alt"></i>&nbsp;{{ $t("message.getThere") }}</a>
    </div>
    <p class="description" v-html="stop.description"></p>
    <div class="gallery" v-if="stop.images.length">
      <div class="image" v-for="image in stop.images" :key="image.id">
        <figure>
            <img v-lazy="image.url" :alt="image.alt"/>
            <figcaption>{{image.name}}</figcaption>
        </figure>
        <p v-html="image.description"></p>
      </div>
    </div>
    <div class="links" v-if="stop.links.length">
      <div class="subtitle">
        <h3><i class="fas fa-globe"></i>&nbsp;{{ $t("message.infoFromTheWeb") }}</h3>
      </div>
      <ul>
        <li v-for="link in stop.links" :key="link.url">
          <a :href="link.url" target="_blank">{{link.name}}</a>
        </li>
      </ul>
    </div>
    <div class="check">
      <div>{{ $t('message.areYouHere') }}</div>
      <button class="primary" :class="{'disabled': stop.checked, 'loading': isCheckingPosition}" @click="checkStop">{{ isCheckingPosition ? '' : isThisStopChecked ? $t('message.locationChecked') : $t('message.checkLocation')  }}</button>
    </div>
    <div class="near" v-if="stop.near">
      <h4><i class="fas fa-map-marked"></i>&nbsp;{{ $t('message.nearHere') }}</h4>
      <div>
        <div v-for="location in stop.near" :key="location.id" class="location">
          <a target="_blank" :href="location.gmapsUrl">
            <img :alt="location.name" v-lazy="location.image"/>
            <i class="fas fa-map-marker-alt"></i>&nbsp;{{ location.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCheckPopup, getPromoPopup, getShopPopup, getFinishPopup, notEvenClosePopup, justOneStepPopup, geolocalizationNotActivePopup } from '@/templates/popups.js'

export default {
  name: 'TourStopCmp',
  data () {
    return {
      currentPosition: undefined,
      currentDistanceFromStop: undefined,
      minDistanceFromStop: 200,
      oneStepDistanceFromStop: 1000,
      isCheckingPosition: false,
      stopPosition: {
        latitude: this.stop.latitude,
        longitude: this.stop.longitude
      },
      swalPopup: undefined
    }
  },
  props: {
    stop: {
      type: Object,
      required: true
    },
    promocodeStepsDone: {
      type: Number,
      required: true
    },
    promocodeStepsTotal: {
      type: Number,
      required: true
    }
  },
  computed: {
    isThisStopChecked () {
      return this.stop.checked
    }
  },
  methods: {
    checkStop () {
      if (this.stop.checked) return
      this.isCheckingPosition = true
      this.getCurrentPosition()
    },

    getCurrentPosition () {
      let that = this
      let checkBrowserSupportForGeolocation = () => {
        return new Promise(function (resolve, reject) {
          if (navigator.geolocation) {
            resolve()
          } else {
            reject(new Error('This Browser do not supports geolocation'))
          }
        })
      }

      let getCurrentUserPositionAndDistanceFromCurrentStop = () => {
        let getUserDistanceFromStop = function () {
          let p1 = that.stopPosition
          let p2 = that.currentPosition
          let rad = function (x) {
            return x * Math.PI / 180
          }
          let R = 6378137 // Earth’s mean radius in meter
          let dLat = rad(p2.latitude - p1.latitude)
          let dLong = rad(p2.longitude - p1.longitude)
          let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2)
          let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
          let d = R * c
          that.currentDistanceFromStop = d // --> the distance in meter
        }
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition((position) => {     
            // I can actually get the user current position
            that.currentPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            } 
            getUserDistanceFromStop()
            resolve()           
          },(error) => {
            // I cannot get user current position
            that.swalPopup = geolocalizationNotActivePopup()
            fireThePopup()
            that.isCheckingPosition = false
          })
        })
      }

      let checkTheStopAndIncrementPromocodeCouter = () => {
        return new Promise(function (resolve, reject) {
          if (that.currentDistanceFromStop < that.minDistanceFromStop) { // true
            that.stop.checked = true
            if (that.stop.popup === 'promo' || that.stop.popup === 'shop') {
              that.$emit('incrementPromocodeCounter')
            }
            resolve()
          } else {
            if (that.currentDistanceFromStop < that.oneStepDistanceFromStop) {
              that.swalPopup = justOneStepPopup(that.currentDistanceFromStop)
            } else {
              that.swalPopup = notEvenClosePopup(that.currentDistanceFromStop)
            }
            reject(new Error('User too far far away...'))
          }
        })
      }

      let setTheRightPopup = () => {
        return new Promise(function (resolve, reject) {
          switch (that.stop.popup) {
            case 'check':
              that.swalPopup = getCheckPopup(that.stop.name, that.stop.path)
              break
            case 'promo':
              if (that.promocodeStepsDone === that.promocodeStepsTotal) {
                that.swalPopup = getPromoPopup(that.stop.name, that.stop.promo, that.$store.getters.getPromocode)
              } else {
                that.swalPopup = getPromoPopup(that.stop.name, that.stop.promo)
              }
              break
            case 'shop':
              if (that.promocodeStepsDone === that.promocodeStepsTotal) {
                that.swalPopup = getShopPopup(that.stop.name, that.$store.getters.getPromocode)
              } else {
                that.swalPopup = getShopPopup(that.stop.name)
              }
              break
            case 'finish':
              that.swalPopup = getFinishPopup()
              break
            default:
              break
          }
          resolve()
        })
      }

      let fireThePopup = () => {
        that.$fire({
          title: that.swalPopup.title,
          type: that.swalPopup.type,
          html: `<div class="popup-content">${that.swalPopup.html}</div>`
        })
      }

      checkBrowserSupportForGeolocation()
        .then(getCurrentUserPositionAndDistanceFromCurrentStop, (error) => { alert(error) })
        .then(checkTheStopAndIncrementPromocodeCouter)
        .then(setTheRightPopup, () => { fireThePopup() })
        .then(() => { fireThePopup() })
        .then(() => { dispatchEvent(new Event('load')) })
        .catch(() => {
          alert('error, try again...')
        })
        .finally(() => { this.isCheckingPosition = false })
    }
  }
}
</script>

<style scoped>
  .stop {
    font-size: 120%;
    border-bottom: 1px solid #999;
    padding: 5rem 1rem;
  }

  .stop.private {
    background-color: #f1f1f1;
    border-color: #971f15;
    border-width: 4px;
  }

  .stop.private .title {
    color: #971f15;
  }

  .title a {
    vertical-align: super;
    font-size: 80%;
  }

  .title span {
    font-size: 60%;
  }

  .description {
    margin: 1rem 0 2.5rem;
    font-style: italic;
  }

  .image p {
    margin-bottom: 3rem;
    font-size: 95%;
  }

  img {
    border: 1px solid #AAA;
    box-shadow: 0px 0px 5px #AAAAAA;
  }

  .links {
    margin: 3rem 0;
  }

  .links li {
    margin: 1.5rem 1rem;
  }

  .check {
    text-align: center;
  }

  .check div {
    color: #666;
    display: block;
    margin-bottom: .5rem;
  }

  .near {
    margin-top: 5rem;
    background: #eaeaea;
    padding: 2rem;
  }

  .near > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .near .location {
    width: 40%;
  }

  .near img {
    margin-bottom: 1rem;
  }

  .near a {
    min-height: 7rem;
    display: block;
    font-size: 85%;
  }

  h3 {
    font-size: 90%;
  }

  h2 {
    margin-bottom: 2rem;
  }
</style>
