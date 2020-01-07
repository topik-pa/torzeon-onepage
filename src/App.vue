<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header-cmp/>
    <router-view/>
    <footer-cmp/>
  </div>
</template>

<script>
import HeaderCmp from '@/components/shared/HeaderCmp'
import FooterCmp from '@/components/shared/FooterCmp'

export default {
  name: 'App',
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
