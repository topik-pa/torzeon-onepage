<template>
  <div class="stop" :class="{'private': stop.type=='private' }">
    <div class="title">
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
      <button class="primary" :class="{'disabled': stop.checked}" @click="checkStop">{{ isThisStopChecked ? $t('message.locationChecked') : $t('message.checkLocation')  }}</button>
    </div>
    <div class="near" v-if="stop.near">
      <h4><i class="fas fa-map-marked"></i>&nbsp;{{ $t('message.nearHere') }}</h4>
      <div>
        <div v-for="location in stop.near" :key="location.id" class="location">
          <a target="_blank" :href="location.gmapsUrl">
            <img :alt="location.name" v-lazy="location.image" />
          </a>          
          <a target="_blank" :href="location.gmapsUrl"><i class="fas fa-map-marker-alt"></i>&nbsp;{{ location.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCheckPopup, getPromoPopup, getShopPopup, getFinishPopup, notEvenClosePopup, justOneStepPopup, geolocalizationNotActivePopup } from '@/templates/popups.js'
import i18n from '@/i18n.js'

export default {
  name: 'TourStopCmp',
  data () {
    return {
      currentPosition: undefined,
      currentDistanceFromStop: undefined,
      stopPosition: {
        latitude: this.stop.latitude,
        longitude: this.stop.longitude,
      },
      swalPopup: undefined,
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
      this.getCurrentPosition()
    },

    getCurrentPosition () {      
      let that = this;      

      let checkBrowserSupportForGeolocation = function() {
        return new Promise(function(resolve, reject) {
          if (navigator.geolocation) {
            resolve()
          } else {
            reject('This Browser do not supports geolocation')
          }
        }
      )}

      let getCurrentUserPositionAndDistanceFromCurrentStop = function() {
        let getUserDistanceFromStop = function() {
          let p1 = that.stopPosition
          let p2 = that.currentPosition
          let rad = function(x) {
            return x * Math.PI / 180
          }
          let R = 6378137; // Earth’s mean radius in meter
          let dLat = rad(p2.latitude - p1.latitude)
          let dLong = rad(p2.longitude - p1.longitude)
          let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(  p1.latitude )) * Math.cos(rad(  p2.latitude  )) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2)
          let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
          let d = R * c
          that.currentDistanceFromStop = d //--> the distance in meter
        }
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition((position) => {
            that.currentPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
            getUserDistanceFromStop()
            resolve()
          }, () => {
            that.swalPopup = geolocalizationNotActivePopup()
            reject()
          })
        }
      )}


      let checkTheStopAndIncrementPromocodeCouter = function() {
        return new Promise(function(resolve, reject) {
          if (true || that.currentDistanceFromStop < 200) { //true
            that.stop.checked = true
            if(that.stop.popup === 'promo' || that.stop.popup == 'shop') {
              that.$emit('incrementPromocodeCounter')
            }
            resolve()          
          } else {
            if (that.currentDistanceFromStop < 1000) {
              that.swalPopup = justOneStepPopup(that.currentDistanceFromStop)
            } else {
              that.swalPopup = notEvenClosePopup(that.currentDistanceFromStop) 
            }
            reject()
          }
          
        }
      )}


      let setTheRightPopup = function() {
        return new Promise(function(resolve, reject) {
          switch (that.stop.popup) {
            case 'check':
              that.swalPopup = getCheckPopup(that.stop.name, that.stop.path)
              break;
            case 'promo':
              if(that.promocodeStepsDone === that.promocodeStepsTotal) {
                that.swalPopup = getPromoPopup(that.stop.name, that.stop.promo, true)
              } else {
                that.swalPopup = getPromoPopup(that.stop.name, that.stop.promo, false)
              }
              break;
            case 'shop':
              if(that.promocodeStepsDone === that.promocodeStepsTotal) {
                that.swalPopup = getShopPopup(that.stop.name, that.stop.fbPage)
              } else {
                that.swalPopup = getPromoPopup(that.stop.name, that.stop.promo)
              }
              break;
            case 'finish':
              that.swalPopup = getFinishPopup()
              break;
            default:
              break;
          }
          resolve()
        }
      )}

      let fireThePopup = function() {
        that.$fire({
          title: that.swalPopup.title,
          type: that.swalPopup.type,
          html: `<div class="popup-content">${that.swalPopup.html}</div>`
        })
      }


      checkBrowserSupportForGeolocation()
      .then(getCurrentUserPositionAndDistanceFromCurrentStop, () => {alert(error)})
      .then(checkTheStopAndIncrementPromocodeCouter, () => {fireThePopup()})
      .then(setTheRightPopup, () => {fireThePopup()})
      .then(() => {fireThePopup()})
      .catch(() => {alert('error')})
    },
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
  }

  .title {
    margin-bottom: 2rem;
  }

  .title a {
    vertical-align: super;
    font-size: 80%;
  }

  .title span {
    font-size: 55%;
  }

  .description {
    margin: 2rem 0;
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
</style>
