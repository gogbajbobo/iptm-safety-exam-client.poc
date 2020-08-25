import { mutations, actions, getters } from '@/store/constants'
import { sendMessageToServer as send } from '@/socket'


const initialState = {
    questions: [],
}

const questionStore = {

    state: initialState,

    mutations: {

        [mutations.setQuestions]: (state, questions) => state.questions = questions,

        [mutations.flushQuestions]: state => state.questions = initialState.questions,

        [mutations.addQuestion]: (state, question) => state.questions = state.questions.concat(question),

        [mutations.replaceQuestion]: (state, question) => {
            state.questions = state.questions.map(q => question.id === q.id ? question : q)
        },

        [mutations.deleteQuestion]: (state, id) => state.questions = state.questions.filter(q => q.id !== id),

    },

    actions: {

        [actions.createQuestion]: ({ commit }, payload) => {

            return send({ action: actions.createQuestion, payload })
                .then(question => {
                    commit(mutations.addQuestion, question)
                    return question
                })

        },

        [actions.flushQuestions]: ({ commit }) => commit(mutations.flushQuestions),

        [actions.getQuestions]: ({ commit }, payload) => {

            return send({ action: actions.getQuestions, payload })
                .then(payload => commit(mutations.setQuestions, payload))

        },

        [actions.updateQuestion]: ({ commit }, payload) => {

            return send({ action: actions.updateQuestion, payload })
                .then(question => {
                    commit(mutations.replaceQuestion, question)
                    return question
                })

        },

        [actions.deleteQuestion]: ({ commit }, payload) => {

            return send({ action: actions.deleteQuestion, payload })
                .then(() => commit(mutations.deleteQuestion, payload))

        },

    },

    getters: {

        [getters.questions]: state => state.questions,

    },

}


export default questionStore
