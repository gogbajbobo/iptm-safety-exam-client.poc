import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'
import { SOCKET } from '@/socket/events'
import logger from '@/services/logger'


Vue.use(Vuex)

const initialState = {
}

export const SOCKET_ACTION_PREFIX = 'SOCKET_'

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {
    },

    actions: {
        [SOCKET_ACTION_PREFIX + SOCKET.LOGIN](context, data) {
            logger.log('login action', data)
        }
    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] })
    ],

    strict: process.env.NODE_ENV !== 'production'

})

export default store
