import Vue from 'vue'
import logger from '@/services/logger'


const EventBus = new Vue()

const events = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

const isProduction = process.env.NODE_ENV === 'production'

const logEvents = () => {

    for (const e of Object.values(events)) {
        EventBus.$on(e, () => { logger.info(`EventBus: ${ e }`) })
    }

}

if (!isProduction) logEvents()


export default EventBus
export { events }
