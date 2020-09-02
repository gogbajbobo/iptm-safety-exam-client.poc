import {messages} from '@/services/messages'

const isProduction = process.env.NODE_ENV === 'production'

const isAdmin = user => user.roles.includes('admin')

const loaderWithAction = (caller, action) => {

    const loader = caller.$loading.show()
    return action.catch(messages.error).then(loader.hide)

}


export const helper = {

    isProduction,
    isAdmin,
    loaderWithAction,

}
