import axios from 'axios'
import { logger } from '@/services/logger'
import helper from '@/services/helper'


const axiosInstance = axios.create()

const
    authPath = `/auth`,
    loginUrl = `${ authPath }/login`,
    logoutUrl = `${ authPath }/logout`

axiosInstance.defaults.baseURL =
    helper.isProduction
        ? 'http://localhost:8081'
        : 'http://localhost:8081'

axiosInstance.interceptors.response.use(response => {

    logger.log(`${ response.config.method } ${ response.config.url } response:`)
    logger.log(response)

    return response.data

}, error => {

    const message = error.response && error.response.data && error.response.data.message
    logger.error(message || error)

    return Promise.reject(error)

})

export const login = ({ username, password }) => {

    const data = { username, password }
    return axiosInstance.post(loginUrl, data, { withCredentials: true })
        .then(data => data.user)

}

export const logout = () => axiosInstance.post(logoutUrl, null, { withCredentials: true })
