import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'
import { login } from '@/services/requests'
import logger from '@/services/logger';


Vue.use(Vuex)

const initialState = {
    user: null
}

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {
        'login': (state, user) => { state.user = user }
    },

    actions: {
        'login': (context, { username, password }) => {

            return login({ username, password })
                .catch(logger.error)

        }
    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] })
    ],

    strict: process.env.NODE_ENV !== 'production'

})

export default store
