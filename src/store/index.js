import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'

import { mutations } from '@/store/constants'

import examStore from '@/store/exam'
import questionStore from '@/store/question'
import answerStore from '@/store/answer'
import authStore from '@/store/auth'


Vue.use(Vuex)

const initialState = {

    ...authStore.state,
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

        ...authStore.mutations,
        ...examStore.mutations,
        ...questionStore.mutations,
        ...answerStore.mutations,

    },

    actions: {

        ...authStore.actions,
        ...examStore.actions,
        ...questionStore.actions,
        ...answerStore.actions,

    },

    getters: {

        ...authStore.getters,
        ...examStore.getters,
        ...questionStore.getters,
        ...answerStore.getters,

    },

    plugins: [
        PersistedState(),
        createMutationsSharer({ predicate: [] }),
    ],

    strict: process.env.NODE_ENV !== 'production'

});

[ ...authStore.watch ].forEach(watch => store.watch(...watch))

// store.watch(
//     state => state.user,
//     user => EventBus.$emit(user ? events.LOGIN : events.LOGOUT),
// )


export default store
