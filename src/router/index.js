


import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

// 注册路由器
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})