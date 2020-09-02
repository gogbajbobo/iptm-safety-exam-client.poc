import { logger } from '@/services/logger'
import store from '@/store'
import { actions } from '@/store/constants'
import router from '@/router'
import { paths } from '@/router/paths'

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

    if (code === 401)
        store.dispatch(actions.logout)
            .catch(logger.error)

    if (code === 403)
        router.currentRoute.path === paths.MAIN || router.push(paths.ROOT)

}

const messageEventHandler = data => {

    const { action, payload } = data

    logger.info('action:', action)
    logger.info('payload:', payload)

}

export const listenEvents = socket => {

    Object.values(SocketEvents).forEach(value => {

        socket.on(value, data => {

            const message = `socket ${ socket.id } ${ value }`

            if (value === SocketEvents.ERROR) {

                logger.error(message)
                return errorHandler(data)

            } else if (value === SocketEvents.MESSAGE) {

                return messageEventHandler(data)

            }

            return logger.info(message)

        })

    })

}

export const unlistenEvents = socket => {
    socket.off()
}
