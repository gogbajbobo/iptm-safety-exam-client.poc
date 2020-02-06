import { openSocket, closeSocket } from '@/socket'
import { SOCKET } from '@/socket/events'
import logger from '@/services/logger'
import store from '@/store'

const login = loginData => {

    const socket = openSocket(loginData)

    socket.on(SOCKET.AUTHORIZED, user => {

        logger.info('socket authorize:', user)
        user || closeSocket()

        store.dispatch(`login`, user)
            .catch(logger.error)

    })
    socket.connect()

}

export default { login }
