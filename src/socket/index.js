import io from 'socket.io-client'
import logger from '@/services/logger'
import EventBus, { events } from '@/services/event.bus'
import helper from '@/services/helper'
import {listenEvents, SocketEvents} from '@/socket/events'
import store from '@/store'
import { getters } from '@/store/constants'


helper.isProduction || (localStorage.debug = 'socket.io-client*')

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

const sendMessageToServer = data => socket.emit(SocketEvents.MESSAGE, data)

const isAuthorized = () => store.getters[getters.isAuthorized]
const checkSocket = () => (isAuthorized() && connectSocket()) || closeSocket()


EventBus.$on(events.LOGIN, connectSocket)
EventBus.$on(events.LOGOUT, closeSocket)
EventBus.$on(events.SND_MSG_2_SRV, sendMessageToServer)


export default { checkSocket, sendMessageToServer }
