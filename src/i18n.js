import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Configs from '@/assets/scripts/configs.js'
import messages from '@/messages.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: Configs.locale(), // set locale
  messages // set locale messages
})

export default i18n
