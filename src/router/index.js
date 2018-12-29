import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import foodList from '@/components/foodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/foodList',
      name: foodList,
      component: foodList
    }
  ]
})
