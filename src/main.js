import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

const isProduction = process.env.NODE_ENV === 'production'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: !isProduction,
  connection: 'http://localhost:8081'
}))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
