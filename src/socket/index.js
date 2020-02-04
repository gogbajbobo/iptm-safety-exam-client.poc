import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import events from '@/socket/events'

const isProduction = process.env.NODE_ENV === 'production'

const socket = new VueSocketIO({
    debug: !isProduction,
    connection: 'http://localhost:8081'
})

Vue.use(socket)

export default socket
export { events }
