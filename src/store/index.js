import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'
import { mutations, actions } from '@/store/constants'
import { login } from '@/services/requests'


Vue.use(Vuex)

const initialState = {
    user: null
}

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {
        [mutations.login]: (state, user) => { state.user = user },
    },

    actions: {
        [actions.login]: (context, { username, password }) => login({ username, password })
    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] }),
    ],

    strict: process.env.NODE_ENV !== 'production'

})

export default store
