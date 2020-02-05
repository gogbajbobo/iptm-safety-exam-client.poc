import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import socket from '@/socket'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  socket,
  store,
  render: h => h(App),
}).$mount('#app')
