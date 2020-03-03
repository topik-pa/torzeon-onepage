<template>
  <transition name="fade">
    <section v-if="started">
      <div id="promocode">
        <span class="title">{{ $t("message.promocode") }}</span>
        <div v-for="stop in stopsWPromo" :key="stop.name">
          <span v-if="stop.checked" >{{stop.promo}}</span>
          <span v-else><i class="fas fa-asterisk"></i></span>
          &nbsp;
        </div>
      </div>
      <div id="stop-count">
        <div>
          <div v-for="stop in stops" :key="stop.id">
            <i v-if="stop.checked" class="fas fa-star" :class="{'private': stop.type === 'private', 'promo': stop.popup === 'promo'}"></i>
            <i v-else class="far fa-star" :class="{'private': stop.type === 'private', 'promo': stop.popup === 'promo'}"></i>
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
      progress: 0,
      docTotalHeight: undefined
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
      let stop = (document.getElementById('ready').getBoundingClientRect().top + 300) + document.documentElement.scrollTop
      let path = this.docTotalHeight - stop
      let scrolled = window.innerHeight - (document.getElementById('ready').getBoundingClientRect().top + 300)
      this.progress = ((scrolled / path) * 100)
    },
    getDocTotalHeight () {
      this.docTotalHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
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
  mounted () {
    this.getDocTotalHeight()
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroller)
  }
}
</script>

<style scoped>
  section {
    border-top: 1px solid #999;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    box-shadow: 0px 0px 5px 0px #AAAAAA;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    text-align: center;
    background-color: rgb(241, 226, 56);
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
    height: .4rem;
  }

  #progress progress::-webkit-progress-bar {
      background-color: rgb(241, 226, 56);
      border-radius: 4px;
  }

  #progress progress::-webkit-progress-value {
      background-color: rgb(184, 170, 17);
  }

  #progress progress::-moz-progress-bar {
      background-color: rgb(184, 170, 17);
      border-radius: 4px;
  }

  #promocode {
    padding: .6rem 0;
    margin-bottom: .6rem;
    border-bottom: 1px solid rgb(219, 204, 33);;
  }

  #promocode div {
    display: inline;
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

  #stop-count i {
    color: #555555;
  }

  #stop-count i.promo {
    color: #000000;
  }
  #stop-count i.private {
    color: #971f15;
  }

  .title {
    margin-right: .5rem;
    margin-bottom: .5rem;
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
