import { mutations, actions, getters } from '@/store/constants'

import { login, logout } from '@/services/requests'
import EventBus, { events } from '@/services/event.bus'


const initialState = {
    user: null,
}

const authStore = {

    state: initialState,

    mutations: {
        [mutations.setUser]: (state, user) => state.user = user,
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

    },

    getters: {

        [getters.isAuthorized]: state => Boolean(state.user),

        [getters.user]: state => state.user,

    },

    watch: [
        [ state => state.user, user => EventBus.$emit(user ? events.LOGIN : events.LOGOUT) ],
    ],

}


export default authStore
