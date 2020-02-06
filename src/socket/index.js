import io from 'socket.io-client'
import logger from '@/services/logger'

const isProduction = process.env.NODE_ENV === 'production'
isProduction || (localStorage.debug = 'socket.io*')

const socketMock = { emit: () => logger.warn('socket not created') }
let socket = socketMock

export const openSocket = ({ username, password }) => {

    socket = io('http://localhost:8081', { autoConnect: false, query: { username, password } })
    return socket

}

export const closeSocket = () => {

    socket.close()
    socket = socketMock

}

export default socket
