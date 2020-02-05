import io from 'socket.io-client'

const isProduction = process.env.NODE_ENV === 'production'
isProduction || (localStorage.debug = 'socket.io-client*')

const socket = io('http://localhost:8081')

export default socket
