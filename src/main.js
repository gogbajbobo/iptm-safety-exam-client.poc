import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import socket from '@/socket'

Vue.config.productionTip = false

new Vue({
  router,
  socket,
  render: h => h(App),
}).$mount('#app')
