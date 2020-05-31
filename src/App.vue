<template>
  <div id="app">
    <header-cmp/>
    <main :style="this.cover">
      <router-view/>
    </main>
  </div>
</template>

<script>
import HeaderCmp from '@/components/shared/HeaderCmp'

export default {
  name: 'App',
  data () {
    return {
      stopHeaderFixed: 120,
      isFixedHeader: true,
      scrolledPosition: 0,
      debounceInterval: 50
    }
  },
  computed: {
    cover () {
      return `background-image: url("${this.$store.getters.getDefaultTour.cover}")`
    }
  },
  components: {
    HeaderCmp
  }
}
</script>

<style>
@import url('./assets/styles/google-imported-fonts.css');
@import url('./assets/styles/reset.min.css');
@import url('./assets/styles/font-awesome.min.css');
@import url('./assets/styles/rating.min.css');
@import url('./assets/styles/tripadvisor-widget.min.css');
@import url('./assets/styles/buttons.css');

#app {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  text-shadow:0 0 0 #666, 0 0 1px transparent;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  position: relative;
}

main {
  background-repeat: no-repeat;
  min-height: 640px;
  height: 1280px;
  background-position: center 0;
  background-size: cover;
  width: 100%;
}

#stops .stop:last-child {
  border: none;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #666;
  outline: none;
}

h1 {
  font-weight: bold;
  font-size: 210%;
  margin: 2rem 0;
}

h2 {
  font-weight: bold;
  font-size: 150%;
  margin-bottom: 1rem;
}

h3 {
  font-size: 130%;
  margin-bottom: 1rem;
}

h4 {
  font-size: 115%;
  margin-bottom: 1rem;
}

p {
  line-height: 140%;
}

figure {
  margin-bottom: 1.5rem;
  position: relative;
}

figcaption {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: .1rem;
  font-size: 0.8rem;
}

img {
  width: 100%;
}

strong {
  font-weight: bold;
  font-style: italic;
}

small, .small {
  font-size: 80%;
}

.social-section-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

article aside {
  transition: top .8s ease-in-out;
}
article.up aside {
  top: -120px;
}

.popup.stopname {
  display: inline-block;
  margin-top: .5rem;
  text-decoration: underline;
  text-shadow: 2px 2px 4px #F8E627;
}
.popup.promocode {
  font-family: monospace;
  font-size: 200%;
  margin: 1.5rem 0;
  display: inline-block;
  letter-spacing: 1rem;
  font-style: italic;
}
.swal2-title {
  display:initial!important;
}

@media screen and (max-width: 1024) {
  main {
    margin-top: 0;
    height: 1280px;
  }
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 13px;
  }
  main {
    margin-top: 0;
    height: 768px;
  }
  article.up aside {
    top: inherit;
  }
}

@media screen and (max-width: 414px) {
  main {
    height: 414px;
  }
}
</style>
