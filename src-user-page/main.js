import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './components/app.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(app)
})