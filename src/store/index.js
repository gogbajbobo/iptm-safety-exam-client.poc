import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'

import { mutations, actions, getters } from '@/store/constants'

import { login, logout } from '@/services/requests'
import EventBus, { events } from '@/services/event.bus'

import examStore from '@/store/exam'
import questionStore from '@/store/question'
import answerStore from '@/store/answer'


Vue.use(Vuex)

const initialState = {

    user: null,
    ...examStore.state,
    ...questionStore.state,
    ...answerStore.state,

}

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {

        [mutations.flushState]: state => Object.assign(state, initialState),

        [mutations.setUser]: (state, user) => state.user = user,

        ...examStore.mutations,
        ...questionStore.mutations,
        ...answerStore.mutations,

    },

    actions: {

        [actions.login]: ({ commit }, { username, password }) => {

            return login({ username, password })
                .then(user => commit(mutations.setUser, user))
                .catch(() => {})

        },

        [actions.logout]: ({ commit }) => {

            commit(mutations.flushState)
            return logout().catch(() => {})

        },

        ...examStore.actions,
        ...questionStore.actions,
        ...answerStore.actions,

    },

    getters: {

        [getters.isAuthorized]: state => Boolean(state.user),

        [getters.user]: state => state.user,

        ...examStore.getters,
        ...questionStore.getters,
        ...answerStore.getters,

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
