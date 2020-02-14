import io from 'socket.io-client'
import logger from '@/services/logger'
import EventBus, { events } from '@/services/event.bus'
import helper from '@/services/helper'
import { listenEvents } from '@/socket/events'
import store from '@/store'
import { getters } from '@/store/constants'


helper.isProduction || (localStorage.debug = 'socket.io*')

const socketMock = {
    emit: () => logger.warn('socket not created'),
    connected: false,
}

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

const isAuthorized = () => store.getters[getters.isAuthorized]


export const checkSocket = () => (isAuthorized() && connectSocket()) || closeSocket()

export default socket
