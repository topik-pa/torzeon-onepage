// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSimpleAlert from 'vue-simple-alert'
import VueLazyload from 'vue-lazyload'
import store from '@/store.js'
import i18n from '@/i18n.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'


Vue.use(VueSimpleAlert)
Vue.use(VueLazyload, {
  preLoad: 1.3
})
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
