import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// import api from './apiData.js'
// Vue.$api = api

// Object.defineProperty(Vue.prototype, '$api', {
//   get () {
//     return api
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
