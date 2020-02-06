import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'


Vue.use(Vuex)

const initialState = {
}

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {
    },

    actions: {
    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] })
    ],

    strict: process.env.NODE_ENV !== 'production'

})

export default store
