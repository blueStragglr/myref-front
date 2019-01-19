import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import success from '@/components/success'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },

  ]
})
