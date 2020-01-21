// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSimpleAlert from 'vue-simple-alert'
import VueI18n from 'vue-i18n'
import Configs from '@/assets/scripts/configs.js'
import store from '@/store.js'
import messages from '@/messages.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/rating.css'

Vue.use(VueSimpleAlert)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: Configs.locale(), // set locale
  messages // set locale messages
})

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
