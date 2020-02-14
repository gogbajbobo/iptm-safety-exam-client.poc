import io from 'socket.io-client'
import logger from '@/services/logger'
import EventBus, { events } from '@/services/event.bus'
import helper from '@/services/helper'
import { listenEvents } from '@/socket/events'


helper.isProduction || (localStorage.debug = 'socket.io*')

const socketMock = { emit: () => logger.warn('socket not created') }
let socket = socketMock

const openSocket = () => {

    socket = io('http://localhost:8081', { autoConnect: false })
    listenEvents(socket)

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
