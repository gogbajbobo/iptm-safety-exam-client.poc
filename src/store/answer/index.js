import { mutations, actions, getters } from '@/store/constants'
import { sendMessageToServer as send } from '@/socket'


const initialState = {
    answers: [],
}

const answerStore = {

    state: initialState,

    mutations: {

        [mutations.setAnswers]: (state, answers) => state.answers = answers,

        [mutations.flushAnswers]: state => state.answers = initialState.answers,

        [mutations.addAnswer]: (state, answer) => state.answers = state.answers.concat(answer),

        [mutations.replaceAnswer]: (state, answer) => {
            state.answers = state.answers.map(a => answer.id === a.id ? answer : a)
        },

        [mutations.deleteAnswer]: (state, id) => state.answers = state.answers.filter(a => a.id !== id ),

    },

    actions: {

        [actions.createAnswer]: ({ commit }, payload) => {

            return send({ action: actions.createAnswer, payload })
                .then(answer => {
                    commit(mutations.addAnswer, answer)
                    return answer
                })

        },

        [actions.flushAnswers]: ({ commit }) => commit(mutations.flushAnswers),

        [actions.getAnswers]: ({ commit }, payload) => {

            return send({ action: actions.getAnswers, payload })
                .then(answers => commit(mutations.setAnswers, answers))

        },

        [actions.updateAnswer]: ({ commit }, payload) => {

            return send({ action: actions.updateAnswer, payload })
                .then(answer => {
                    commit(mutations.replaceAnswer, answer)
                    return answer
                })

        },

        [actions.setAnswerAsCorrect]: ({ commit }, payload) => {

            return send({ action: actions.setAnswerAsCorrect, payload})
                .then(answers => commit(mutations.setAnswers, answers))

        },

        [actions.deleteAnswer]: ({ commit }, payload) => {

            return send({ action: actions.deleteAnswer, payload })
                .then(() => commit(mutations.deleteAnswer, payload))

        },

        [actions.checkAnswers]: (context, payload) => send({ action: actions.checkAnswers, payload }),

    },

    getters: {

        [getters.answers]: state => state.answers,

    },

}


export default answerStore
