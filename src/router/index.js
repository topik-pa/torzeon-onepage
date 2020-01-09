import Vue from 'vue'
import Router from 'vue-router'
import Tour from '@/components/Tour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Tour
    },
    {
      path: '/test-tour',
      name: 'Tour',
      component: Tour
    }
  ]
})
