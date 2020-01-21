import Vue from 'vue'
import Router from 'vue-router'
import ArticleCmp from '@/components/ArticleCmp'
import Configs from '@/assets/scripts/configs.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: to => {
        if (Configs.locale() === 'it') {
          return '/un-giorno-a-milano'
        } else {
          return '/a-day-in-milan'
        }
      }
    },
    {
      path: '/un-giorno-a-milano',
      name: 'Tour-IT',
      component: ArticleCmp
    },
    {
      path: '/a-day-in-milan',
      name: 'Tour-EN',
      component: ArticleCmp
    }
  ]
})
