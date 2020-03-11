import helper from '@/services/helper'


const { isProduction } = helper

/* eslint-disable no-console */
export const logger = {

    log: (...args) => isProduction || console.log(...args),
    info: (...args) => isProduction || console.info(...args),
    warn: (...args) => isProduction || console.warn(...args),
    error: (...args) => isProduction ||  console.error(...args)

}
/* eslint-enable no-console */
