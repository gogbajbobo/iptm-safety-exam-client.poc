import logger from '@/services/logger'
import store from '@/store'
import { actions } from '@/store/constants'

export const SocketEvents = {

    CONNECT: 'connect',
    CONNECT_ERROR: 'connect_error',
    CONNECT_TIMEOUT: 'connect_timeout',
    ERROR: 'error',
    DISCONNECT: 'disconnect',
    RECONNECT: 'reconnect',
    RECONNECT_ATTEMPT: 'reconnect_attempt',
    RECONNECTING: 'reconnecting',
    RECONNECT_ERROR: 'reconnect_error',
    RECONNECT_FAILED: 'reconnect_failed',
    PING: 'ping',
    PONG: 'pong',

    MESSAGE: 'message',

}

const errorHandler = data => {

    logger.error(data)
    const { code } = data

    if (code === 401) {

        store.dispatch(actions.logout)
            .catch(logger.error)

    }

}

export const listenEvents = socket => {

    Object.values(SocketEvents).forEach(value => {

        socket.on(value, data => {

            const message = `socket ${ socket.id } ${ value }`

            if (value === SocketEvents.ERROR) {

                logger.error(message)
                return errorHandler(data)

            }

            return logger.info(message)

        })

    })

}

export const unlistenEvents = socket => {
    socket.off()
}
