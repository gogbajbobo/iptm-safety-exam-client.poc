import axios from 'axios'
import logger from '@/services/logger'


const axiosInstance = axios.create()

const
    authPath = `/auth`,
    loginUrl = `${ authPath }/login`

const isProduction = process.env.NODE_ENV === 'production'

axiosInstance.defaults.baseURL =
    isProduction
        ? 'http://localhost:8081'
        : 'http://localhost:8081'

axiosInstance.interceptors.response.use(response => {

    logger.log(`${ response.config.method } ${ response.config.url } response:`)
    logger.log(response)

    return response.data

}, error => {

    const message = error.response && error.response.data && error.response.data.message
    message && logger.error(message)

    return Promise.reject(error)

})


export const login = ({ username, password }) => {

    const data = { username, password }
    return axiosInstance.post(loginUrl, data, { withCredentials: true }).catch(logger.error)

}
