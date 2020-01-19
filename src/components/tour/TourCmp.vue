<template>
  <section>
    <h2>{{tour.subtitle}}</h2>
    <h1>{{tour.title}}</h1>
    <p>{{tour.text}}</p>
    <tour-footer-cmp :author="tour.author" :avatar="tour.avatarAuthorUrl" :mail="tour.authorMail" :socials="tour.socials"/>
    <tour-gallery-cmp :images="tour.images"/>
    <aside>
      <tour-card-cmp v-for="highlight in tour.highlights" :key="highlight.id" :marker="highlight.marker" :title="highlight.title" :image="highlight.image" :list="highlight.list" :text="highlight.text" :cta="highlight.cta"/>
    </aside>
    <div id="ready">
      <div class="title">
        <h2><i class="icon material-icons">directions</i>&nbsp; Are you ready? ...Let's START!</h2>
      </div>
    </div>
    <div class="stops">
      <tour-stop-cmp v-for="stop in tour.stops" :key="stop.id" :stop="stop"/>
    </div>
    <tour-bottom-cmp :stops="tour.stops" :started="tour.started"/>
  </section>
</template>

<script>
import TourFooterCmp from './TourFooterCmp'
import TourGalleryCmp from './TourGalleryCmp'
import TourStopCmp from './TourStopCmp'
import TourCardCmp from './TourCardCmp'
import TourBottomCmp from './TourBottomCmp'
export default {
  name: 'TourCmp',
  components: {
    TourFooterCmp,
    TourGalleryCmp,
    TourCardCmp,
    TourStopCmp,
    TourBottomCmp
  },
  props: {
    tour: {
      type: Object,
      required: true
    }
  },
  computed: {
  },
  methods: {
    tourStarted () {
      var scrollSize = window.innerHeight - document.getElementById('ready').getBoundingClientRect().top
      if (scrollSize < 300) {
        this.started = false
      } else {
        this.started = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.tourStarted)
  },
  destroyed () {
    window.removeEventListener('scroll', this.tourStarted)
  }
}
</script>

<style scoped>
section {
    width: 66%;
    margin-bottom: 10rem;
}

h2 {
    font-weight: bold;
    margin-top: 1rem;
    font-size: 1.2rem;
}

h1 {
    font-weight: bold;
    font-size: 2.5rem;
    margin: 2rem 0;
}

p {
    padding-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 150%;
    margin: 0;
}

#ready {
  padding-top: 4rem;
}

#ready i {
  font-size: 200%;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  section {
      width: 100%;
  }
}

aside {
    position: absolute;
    top: 30px;
    right: 2rem;
    z-index: 99;
}

@media screen and (max-width: 768px) {
    aside {
        position: relative;
        right: initial;
    }
}
</style>
