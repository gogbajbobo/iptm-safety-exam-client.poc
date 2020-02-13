import io from 'socket.io-client'
import logger from '@/services/logger'

const isProduction = process.env.NODE_ENV === 'production'
isProduction || (localStorage.debug = 'socket.io*')

const socketMock = { emit: () => logger.warn('socket not created') }
let socket = socketMock

export const openSocket = () => {

    socket = io('http://localhost:8081', { autoConnect: false })
    return socket

}

export const closeSocket = () => {

    socket.close()
    socket = socketMock

}

export default socket
