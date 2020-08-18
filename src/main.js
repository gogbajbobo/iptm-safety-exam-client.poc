import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading, { color: 'blue' })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
