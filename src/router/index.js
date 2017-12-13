


import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import detail from '../components/detail.vue'
import notFound from '../components/notFound.vue'

Vue.use(VueRouter)

// 注册路由器
export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'detail/:newsId',
              component: detail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '*',
      component: notFound
    }
  ]
})