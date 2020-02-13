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


export const login = ({ username, password }) => {

    const data = { username, password }

    return axiosInstance.post(loginUrl, data, { withCredentials: true })
        .then(response => logger.info(response))
        .catch(logger.error)

}
