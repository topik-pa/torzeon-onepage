<template>
  <div class="stop" :class="{'private': stop.type=='private' }">
    <div class="title">
      <h2>{{stop.name}}</h2>
      <i class="icon material-icons">android</i>&nbsp;
      <a target="_blank" :href="stop.gmapsLocation">{{labelGMapsLocation}}</a>
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
        <h3><i class="icon material-icons">android</i>&nbsp;Other infos from the Web</h3>
      </div>
      <ul>
        <li v-for="link in stop.links" :key="link.url">
          <a :href="link.url" target="_blank">{{link.name}}</a>
        </li>
      </ul>
    </div>
    <div class="check">
      <small>Are you here?</small>
      <cta-cmp :label="labelButtonCheck" :btnType="'primary'" :disabled="stop.checked" @clicked="checkStop"/>
    </div>
  </div>
</template>

<script>
import CtaCmp from '@/components/shared/CtaCmp'
import { getCheckPopup, getPromoPopup, getShopPopup, getFinishPopup } from '@/templates/popups.js'

export default {
  name: 'TourStopCmp',
  data: function () {
    return {
      labelGMapsLocation: this.stop.id === 0 ? 'How to get there?' : 'Where am I?',
      labelButtonCheck: 'CHECK THIS LOCATION!'
    }
  },
  props: {
    stop: {
      type: Object,
      required: true
    }
  },
  components: {
    CtaCmp
  },
  methods: {
    checkStop () {
      if (this.stop.checked) {
        return
      }
      this.stop.checked = true
      this.labelButtonCheck = 'CHECKED!'
      if (this.stop.popup === 'check') {
        let swalPopup = getCheckPopup(this.stop.name, this.stop.path)
        this.$fire({
          title: swalPopup.title,
          type: swalPopup.type,
          html: swalPopup.html
        })
      }
      if (this.stop.popup === 'promo') {
        let swalPopup = getPromoPopup(this.stop.name, this.stop.promo, this.stop.path)
        this.$fire({
          title: swalPopup.title,
          type: swalPopup.type,
          html: swalPopup.html
        })
      }
      if (this.stop.popup === 'shop') {
        let swalPopup = getShopPopup(this.stop.name, this.stop.fbPage, this.stop.path)
        this.$fire({
          title: swalPopup.title,
          type: swalPopup.type,
          html: swalPopup.html
        })
      }
      if (this.stop.popup === 'finish') {
        let swalPopup = getFinishPopup()
        this.$fire({
          title: swalPopup.title,
          type: swalPopup.type,
          html: swalPopup.html
        })
      }
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

  .description {
    margin: 2rem 0;
  }

  .image p {
    margin-bottom: 3rem;
  }

  img {
    border: 1px solid #AAA;
    box-shadow: 0px 0px 5px #AAAAAA;
  }

  .links {
    margin: 3rem 0;
  }

  .check {
    text-align: center;
  }

  .check small {
    color: #666;
    display: block;
    margin-bottom: .5rem;
  }
</style>
