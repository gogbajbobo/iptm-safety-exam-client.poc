import io from 'socket.io-client'
import logger from '@/services/logger'
import EventBus, { events } from '@/services/event.bus'


const isProduction = process.env.NODE_ENV === 'production'
isProduction || (localStorage.debug = 'socket.io*')

const socketMock = { emit: () => logger.warn('socket not created') }
let socket = socketMock

const openSocket = () => {

    socket = io('http://localhost:8081', { autoConnect: false })
    return socket

}

const connectSocket = () => openSocket().connect()

const closeSocket = () => {

    socket.close()
    socket = socketMock

}

EventBus.$on(events.LOGIN, connectSocket)
EventBus.$on(events.LOGOUT, closeSocket)


export default socket
