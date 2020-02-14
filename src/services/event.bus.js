import Vue from 'vue'
import logger from '@/services/logger'
import helper from '@/services/helper'


const EventBus = new Vue()

const events = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

const logEvents = () => {

    for (const e of Object.values(events)) {
        EventBus.$on(e, () => { logger.info(`EventBus: ${ e }`) })
    }

}

if (!helper.isProduction) logEvents()


export default EventBus
export { events }
