import { messages } from '@/services/messages'
import { userRoles } from '@/services/constants'

const isProduction = process.env.NODE_ENV === 'production'

const isAdmin = user => user.roles.includes(userRoles.admin)
const isExaminee = user => user.roles.includes(userRoles.examinee)

const loaderWithAction = (caller, action) => {

    const loader = caller.$loading.show()
    return action.catch(messages.error).then(loader.hide)

}


export const helper = {

    isProduction,

    isAdmin,
    isExaminee,

    loaderWithAction,

}
