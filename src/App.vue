<template>
  <div id="app">
    <header-cmp/>
    <main :style="this.cover">
      <router-view/>
    </main>
  </div>
</template>

<script>
import JSUtils from '@/assets/scripts/utilities.js'
import HeaderCmp from '@/components/shared/HeaderCmp'

export default {
  name: 'App',
  data () {
    return {
      stopHeaderFixed: 120,
      isFixedHeader: true,
      scrolledPosition: 0,
      debounceInterval: 5
    }
  },
  computed: {
    cover () {
      if (this.isFixedHeader) {
        return `background-image: url("${this.$store.getters.getDefaultTour.cover}")`
      } else {
        return `background-image: url("${this.$store.getters.getDefaultTour.cover}"); background-position-y: -5rem`
      }
    }
  },
  components: {
    HeaderCmp
  },
  mounted: function () {
    if (screen.width <= 760) {
      this.isMobile = true
    }
    let deabouncedScrollListener = JSUtils.debounce(() => {
      if (this.isMobile) {
        return
      }
      this.scrolledPosition = window.scrollY
      if (this.scrolledPosition > this.stopHeaderFixed) {
        this.isFixedHeader = false
      }
      if (this.scrolledPosition <= this.stopHeaderFixed) {
        this.isFixedHeader = true
      }
    }, this.debounceInterval)
    window.addEventListener('scroll', function () {
      deabouncedScrollListener()
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin|Montserrat&display=swap');
@import url('./assets/styles/reset.min.css');
@import url('./assets/styles/font-awesome.min.css');
@import url('./assets/styles/rating.min.css');
@import url('./assets/styles/tripadvisor-widget.min.css');

#app {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  margin-top: 5rem;
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
  margin-bottom: 1rem;
  font-size: 150%;
}

h3 {
  font-size: 130%;
  margin-bottom: 1rem;
}

h4 {
  font-size: 120%;
  margin-bottom: 1rem;
}

p {
  line-height: 150%;
}

figure {
  margin-bottom: 1rem;
}

figcaption {
  text-align: center;
  color: #666;
  font-style: italic;
}

img {
  width: 100%;
  box-sizing: border-box;
}

strong {
  font-weight: bold;
  font-style: italic;
}

small, .small {
  font-size: 80%;
}

.social-widget-cointainer-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button, a.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 2px solid transparent;
  padding: .5rem 1rem;
  font-size: 100%;
  line-height: 1.4;
  border-radius: 5px;
  outline: none;
}
button.primary, a.btn.primary {
  color: #333;
  background-color: rgb(245, 224, 0);
  border-color: rgb(184, 170, 17);
  font-weight: bold;
}
button.primary:hover, a.btn.primary:hover {
  background-color: rgb(230, 212, 25)
}
button.primary.disabled, a.btn.primary-disabled {
  color: #999;
  background-color: transparent;
  cursor: auto;
}
button.secondary, a.btn.secondary {
  color: #333;
  background-color: #fff;
  border-color: #F8E627;
  font-weight: bold;
}
button.secondary:hover, a.btn.secondary:hover {
  background-color: #fafafa;
}
button.secondary.disabled, a.btn.secondary-disabled {
  color: #999;
  background-color: transparent;
  cursor: auto;
}
button.loading {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

article aside {
  transition: top .8s ease-in-out;
}
article.up aside {
  top: -120px;
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
