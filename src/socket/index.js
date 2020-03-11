import io from 'socket.io-client'

import { logger } from '@/services/logger'
import EventBus, { events } from '@/services/event.bus'
import helper from '@/services/helper'

import { SocketEvents, listenEvents, unlistenEvents } from '@/socket/events'


helper.isProduction || (localStorage.debug = 'socket.io-client*')

let socket

const socketMock = {
    emit: () => logger.warn('socket not created'),
    connected: false,
}

socket = { ...socketMock }

const openSocket = () => {

    if (socket.io)
        return socket

    socket = io('http://localhost:8081', { autoConnect: false })
    listenEvents(socket)

    return socket

}

const connectSocket = () => socket.connected || openSocket().connect()

const closeSocket = () => {

    if (socket.connected) {

        socket.close()
        unlistenEvents(socket)

    }

    socket = { ...socketMock }

}

export const checkSocket = isAuthorized => isAuthorized ? connectSocket() : closeSocket()

export const sendMessageToServer = data => new Promise((resolve, reject) => {

    socket.emit(SocketEvents.MESSAGE, data, response => {

        const { error, payload } = response
        error ? reject(error) : resolve(payload)

    })

})


EventBus.$on(events.LOGIN, connectSocket)
EventBus.$on(events.LOGOUT, closeSocket)
EventBus.$on(events.SND_MSG_2_SRV, sendMessageToServer)
