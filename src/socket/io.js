import socket from '@/socket'
import { SOCKET } from '@/socket/events'
import logger from '@/services/logger'
import router from '@/router'

const { io } = socket

const login = data => {

    io.emit(SOCKET.LOGIN, data, response => {

        if (response.error)
            return logger.error('auth error')

        router.push({ name: 'Main' })
            .catch(logger.error)

    })

}

export default { login }
