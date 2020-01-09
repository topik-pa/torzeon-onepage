import Vue from 'vue'
import Router from 'vue-router'
import ArticleCmp from '@/components/shared/ArticleCmp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ArticleCmp
    },
    {
      path: '/test-tour',
      name: 'Tour',
      component: ArticleCmp
    }
  ]
})
