import { actions } from '@/store/constants'
import { sendMessageToServer as send } from '@/socket'


const initialState = {

}

const examResultStore = {

    state: initialState,

    mutations: {

    },

    actions: {
        [actions.getExamResults]: () => send({ action: actions.getExamResults }),
    },

    getters: {

    },

}


export default examResultStore
