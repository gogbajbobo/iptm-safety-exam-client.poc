import socket from '@/socket'
import { SOCKET } from '@/socket/events'
import logger from '@/services/logger'
import router from '@/router'
// import store, { SOCKET_ACTION_PREFIX } from '@/store'

const { io } = socket

const login = data => {

    io.emit(SOCKET.LOGIN, data, response => {

        if (response.error)
            return logger.error('auth error')

        // store.dispatch(`${ SOCKET_ACTION_PREFIX }${ SOCKET.LOGIN }`, 'test')
        //     .catch(logger.error)

        router.push({ name: 'Main' })
            .catch(logger.error)

    })

}

export default { login }
