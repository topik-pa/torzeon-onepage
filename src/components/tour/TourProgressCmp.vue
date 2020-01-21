<template>
  <transition name="fade">
    <section v-if="started">
      <div id="promocode">
        <span class="title">{{ $t("message.promocode") }}</span>
        <div v-for="stop in stopsWPromo" :key="stop.name">
          <span v-if="stop.checked" >{{stop.promo}}</span>
          <span v-else><i class="icon material-icons">clear</i></span>
          &nbsp;
        </div>
      </div>
      <div id="stop-count">
        <span class="title">Checkpoints:&nbsp;</span>
        <div>
          <div v-for="stop in stops" :key="stop.id">
            <i v-if="stop.checked" class="icon material-icons" :class="{'private': stop.type === 'private'}">star</i>
            <i v-else class="icon material-icons" :class="{'private': stop.type === 'private'}">star_border</i>
          </div>
        </div>
      </div>
      <div id="progress">
        <div>
          <progress :value="progress" max="100"></progress>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'TourProgressCmp',
  data () {
    return {
      progress: 0
    }
  },
  props: {
    stops: {
      type: Array,
      required: false
    },
    started: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    scroller () {
      let scrollPosition = window.scrollY
      let scrollSize = window.innerHeight - document.documentElement.offsetHeight
      let advanced = Math.round((scrollPosition * 100) / scrollSize)
      this.progress = advanced
    }
  },
  computed: {
    privateStop () {
      let privateStop = this.stops.find((stop) => stop.type === 'private')
      if (privateStop) {
        return privateStop
      } else {
        return {}
      }
    },
    stopsWPromo () {
      return this.stops.filter((stop) => stop.promo)
    }
  },
  created () {
    window.addEventListener('scroll', this.scroller)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroller)
  }
}
</script>

<style scoped>
  section {
    border-top: 1px solid #999;
    background-color: #FFF;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    box-shadow: 0px 0px 5px 0px #AAAAAA;
    border-radius: 3px;
    text-align: center;
    font-size: 110%;
  }

  #progress {
    position: fixed;
    width: 100%;
    max-width: 1280px;
    z-index: 99;
    bottom: 0;
  }

  #progress progress{
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: .5rem;
    border-top: 1px solid #AAA;
  }

  #progress progress::-webkit-progress-bar {
      background-color: #faf7f3;
      border-radius: 4px;
  }

  #progress progress::-webkit-progress-value {
      background-color: #F8E627;
  }

  #progress progress::-moz-progress-bar {
      background-color: #F8E627;
      border-radius: 4px;
  }

  #promocode {
    padding: 1rem 0;
  }

  #promocode div {
    display: inline;
    vertical-align: middle;
    font-weight: bold;
  }

  #stop-count > div {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin: 0 auto;
    margin-bottom: 1rem;
    min-width: 240px;
  }

  #stop-count i.private {
    color: #F8E627;
    font-weight: bold;
  }

  .title {
    margin-bottom: .3rem;
    display: block;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s;
  }
 .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    section {
      width: 100vw;
      right: inherit;
    }

    .title {
      display: block;
    }
  }
</style>
