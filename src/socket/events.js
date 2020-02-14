import logger from '@/services/logger'

export const SOCKET = {

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

export const listenEvents = socket => {

    socket.on(SOCKET.CONNECT, () => {
        logger.info(`socket ${ socket.id } connect`)
    })

}
