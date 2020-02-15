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
            <img :src="image.url" :alt="image.alt"/>
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
      <div>Are you here?</div>
      <button class="primary" :class="{'disabled': stop.checked}" @click="checkStop">{{ isThisStopChecked ? $t('message.locationChecked') : $t('message.checkLocation')  }}</button>
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
      }
    }
  },
  props: {
    stop: {
      type: Object,
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
      if (navigator.geolocation) {
        new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(function(position) {
            that.currentPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
            resolve()
          }, function() {
            let swalPopupGeoNotActive = geolocalizationNotActivePopup()
            that.$fire({
              title: swalPopupGeoNotActive.title,
              type: swalPopupGeoNotActive.type,
              html: swalPopupGeoNotActive.html
            })
          })   
        }).then(function() {
          that.isUserNearTheStop()
        }).then(function() {
          that.popUpTheDialogs()
        }).catch(function() {
          alert('Error getting Geolocation')
        })
      }
    },
    isUserNearTheStop () {
      if (this.currentPosition) {        
        let p1 = this.stopPosition
        let p2 = this.currentPosition
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
        this.currentDistanceFromStop = d //--> the distance in meter
      }
    },
    popUpTheDialogs () {
      let swalPopup
      if ( true || this.currentDistanceFromStop < 200) {
        this.stop.checked = true
        switch (this.stop.popup) {
          case 'check':
            swalPopup = getCheckPopup(this.stop.name, this.stop.path)
            break;
          case 'promo':
            swalPopup = getPromoPopup(this.stop.name, this.stop.promo, this.stop.path)
            break;
          case 'shop':
            swalPopup = getShopPopup(this.stop.name, this.stop.fbPage, this.stop.path)
            break;
          case 'finish':
            swalPopup = getFinishPopup()
            break;
          default:
            break;
        }
      } else if (this.currentDistanceFromStop < 1000) {
          swalPopup = justOneStepPopup(this.currentDistanceFromStop)
      } else {
          swalPopup = notEvenClosePopup(this.currentDistanceFromStop)    
      }  
      this.$fire({
        title: swalPopup.title,
        type: swalPopup.type,
        html: `<div class="popup-content">${swalPopup.html}</div>`
      })
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
</style>
