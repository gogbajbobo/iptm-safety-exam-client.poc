const isProduction = process.env.NODE_ENV === 'production'

/* eslint-disable no-console */
export default {

    log: (...args) => isProduction || console.log(...args),
    info: (...args) => isProduction || console.info(...args),
    warn: (...args) => isProduction || console.warn(...args),
    error: (...args) => isProduction ||  console.error(...args)

}
/* eslint-enable no-console */
