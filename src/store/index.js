import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'


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
        'login': ({ commit }, user) => commit('login', user)
    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] })
    ],

    strict: process.env.NODE_ENV !== 'production'

})

export default store
