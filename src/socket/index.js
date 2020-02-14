import io from 'socket.io-client'
import logger from '@/services/logger'
import EventBus, { events } from '@/services/event.bus'
import helper from '@/services/helper'
import { listenEvents } from '@/socket/events'


helper.isProduction || (localStorage.debug = 'socket.io*')

const socketMock = { emit: () => logger.warn('socket not created') }
let socket = socketMock

const openSocket = () => {

    if (socket.connected)
        return socket

    socket = io('http://localhost:8081', { autoConnect: false })
    listenEvents(socket)

    return socket

}

const connectSocket = () => socket.connected || openSocket().connect()

const closeSocket = () => {

    socket.connected && socket.close()
    socket = socketMock

}

EventBus.$on(events.LOGIN, connectSocket)
EventBus.$on(events.LOGOUT, closeSocket)


export default socket
