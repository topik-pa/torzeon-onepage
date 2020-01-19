<template>
  <div id="app">
    <header-cmp/>
    <main :style="this.cover">
      <router-view/>
    </main>
    <footer-cmp/>
  </div>
</template>

<script>
import HeaderCmp from '@/components/shared/HeaderCmp'
import FooterCmp from '@/components/shared/FooterCmp'

export default {
  name: 'App',
  computed: {
    cover () {
      return `background-image: url("${this.$store.getters.getDefaultTour.cover}")`
    }
  },
  components: {
    HeaderCmp,
    FooterCmp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: 'Montserrat', sans-serif;
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
  height: 640px;
  background-position: center 0;
  background-size: cover;
  position: absolute;
  width: 100%;
  top: 5rem;
}

.stops .stop:last-child {
  border: none;
}

a {
  color: #666;
  text-decoration: none;
}

p {
  line-height: 1.4;
}

strong {
  font-weight: bold;
}
</style>
