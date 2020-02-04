const events = [

    'connect',
    'connect_error',
    'connect_timeout',
    'error',
    'disconnect',
    'reconnect',
    'reconnect_attempt',
    'reconnecting',
    'reconnect_error',
    'reconnect_failed',
    'ping',
    'pong',

    'message',

]

export default (() => {

    return events.reduce((result, se) => {

        result[se] = () => {}
        return result

    }, {})

})()
