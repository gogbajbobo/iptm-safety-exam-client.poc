import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'

import { mutations, actions, getters } from '@/store/constants'

import { login, logout } from '@/services/requests'
import EventBus, { events } from '@/services/event.bus'

import { sendMessageToServer } from '@/socket'


Vue.use(Vuex)

const initialState = {

    user: null,
    exams: [],

}

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {

        [mutations.setUser]: (state, user) => { state.user = user },

        [mutations.setExams]: (state, exams) => { state.exams = exams },

    },

    actions: {

        [actions.login]: ({ commit }, { username, password }) => {

            return login({ username, password })
                .then(user => commit(mutations.setUser, user))
                .catch(() => {})

        },

        [actions.logout]: ({ commit }) => {

            commit(mutations.setUser, initialState.user)
            return logout().catch(() => {})

        },

        [actions.createExam]: (context, payload) => sendMessageToServer({ action: actions.createExam, payload })

    },

    getters: {

        [getters.isAuthorized]: state => Boolean(state.user),

        [getters.user]: state => state.user,

    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] }),
    ],

    strict: process.env.NODE_ENV !== 'production'

})

store.watch(
    state => state.user,
    user => EventBus.$emit(user ? events.LOGIN : events.LOGOUT),
)


export default store
