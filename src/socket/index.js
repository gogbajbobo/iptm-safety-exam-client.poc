import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import events from '@/socket/events'
import store, { SOCKET_ACTION_PREFIX } from '@/store'

const isProduction = process.env.NODE_ENV === 'production'

const socket = new VueSocketIO({
    debug: !isProduction,
    connection: 'http://localhost:8081',
    vuex: {
        store,
        actionPrefix: SOCKET_ACTION_PREFIX
    }
})

Vue.use(socket)

export default socket
export { events }
