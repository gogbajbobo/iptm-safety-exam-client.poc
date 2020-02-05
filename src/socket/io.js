import socket from '../socket'
import logger from '@/services/logger'

const { io } = socket

const login = data => {

    io.emit('login', data, response => { logger.info(response) })

}

export default { login }
