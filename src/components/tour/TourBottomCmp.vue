<template>
  <transition name="fade">
    <footer v-if="started" transition="baudo">
      <div id="promocode">
        <strong>Promocode</strong> for <span>"{{privateStop.name}}":&nbsp;</span>
        <div v-for="stop in stops" :key="stop.name">
          <span v-if="stop.checked" >{{stop.promo}}</span>
          <span v-else><i class="icon material-icons">clear</i></span>
          &nbsp;
        </div>
      </div>
      <div id="stops">
        <div v-for="stop in stops" :key="stop.id">
          <i v-if="stop.checked" class="icon material-icons">star</i>
          <i v-else class="icon material-icons">star_border</i>
        </div>
      </div>
      <div id="progress">
        <div>
          <progress :value="progress" max="100"></progress>
        </div>
      </div>
    </footer>
  </transition>
</template>

<script>
export default {
  name: 'FooterCmp',
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
      var scrollPosition = window.scrollY
      var scrollSize = window.innerHeight - document.documentElement.offsetHeight
      var advanced = Math.round((scrollPosition * 100) / scrollSize)
      this.progress = advanced
    }
  },
  computed: {
    privateStop () {
      let privateStop = this.stops.filter((stop) => stop.type === 'private')[0]
      if (privateStop) {
        return privateStop
      } else {
        return {}
      }
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
  footer {
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
      height: 0.3rem;
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
    text-align: center;
    line-height: 3rem;
    font-size: 1.5rem;
  }

  #promocode div {
    display: inline;
    font-weight: bold;
  }

  #promocode i {
    vertical-align: text-bottom;
  }

  #stops {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin: 0 auto;
    margin-bottom: 1rem;
    min-width: 240px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s;
  }
 .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    footer {
      width: 100vw;
      right: inherit;
    }
  }
</style>
