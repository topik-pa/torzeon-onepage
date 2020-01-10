<template>
  <div id="app">
    <header-cmp/>
    <main>
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
  background-image: url('https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/cover.png');
  background-repeat: no-repeat;
  min-height: 640px;
  background-position: 50% 5rem;
  position: absolute;
  width: 100%;
  top: 0;
}

.stops .stop:last-child {
  border: none;
}

.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .5rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 5px;
}
.btn-primary {
    color: #333;
    background-color: #F8E627;
    border-color: #E7D516;
    font-weight: bold;
}
.btn-primary.disabled {
    color: #999;
    background-color: transparent;
    cursor: auto;
}
</style>
