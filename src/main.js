import Vue from 'vue'
import App from './App.vue'
import Plugin from './plugin'

Vue.use(Plugin)
Vue.ola()

new Vue({
  el: '#app',
  render: h => h(App)
})
