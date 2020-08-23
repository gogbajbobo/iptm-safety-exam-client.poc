import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'

import { mutations, actions, getters } from '@/store/constants'

import { login, logout } from '@/services/requests'
import EventBus, { events } from '@/services/event.bus'

import { sendMessageToServer as send } from '@/socket'


Vue.use(Vuex)

const initialState = {

    user: null,
    exams: [],
    questions: [],
    answers: [],

}

const store = new Vuex.Store({

    modules: {
    },

    state: initialState,

    mutations: {

        [mutations.setUser]: (state, user) => state.user = user,


        [mutations.setExams]: (state, exams) => state.exams = exams,

        [mutations.addExam]: (state, exam) => state.exams.push(exam),

        [mutations.replaceExam]: (state, exam) => state.exams = state.exams.map(e => exam.id === e.id ? exam : e),

        [mutations.deleteExam]: (state, id) => state.exams = state.exams.filter(exam => exam.id !== id),


        [mutations.setQuestions]: (state, questions) => state.questions = questions,

        [mutations.addQuestion]: (state, question) => state.questions.push(question),

        [mutations.replaceQuestion]: (state, question) => {
            state.questions = state.questions.map(q => question.id === q.id ? question : q)
        },

        [mutations.deleteQuestion]: (state, id) => state.questions = state.questions.filter(q => q.id !== id),


        [mutations.setAnswers]: (state, answers) => state.answers = answers,

        [mutations.addAnswer]: (state, answer) => state.answers.push(answer),

        [mutations.replaceAnswer]: (state, answer) => {
            state.answers = state.answers.map(a => answer.id === a.id ? answer : a)
        },

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

        [actions.createExam]: ({ commit }, payload) => {

            return send({ action: actions.createExam, payload })
                .then(exam => {
                    commit(mutations.addExam, exam)
                    return exam
                })

        },

        [actions.getExams]: ({ commit }) => {

            return send({ action: actions.getExams })
                .then(payload => commit(mutations.setExams, payload))

        },

        [actions.updateExam]: ({ commit }, payload) => {

            return send({ action: actions.updateExam, payload })
                .then(exam => {
                    commit(mutations.replaceExam, exam)
                    return exam
                })

        },

        [actions.deleteExam]: ({ commit }, payload) => {

            return send({ action: actions.deleteExam, payload })
                .then(() => commit(mutations.deleteExam, payload))

        },

        [actions.createQuestion]: ({ commit }, payload) => {

            return send({ action: actions.createQuestion, payload })
                .then(question => {
                    commit(mutations.addQuestion, question)
                    return question
                })

        },

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

        [actions.createAnswer]: ({ commit }, payload) => {

            return send({ action: actions.createAnswer, payload })
                .then(answer => {
                    commit(mutations.addAnswer, answer)
                    return answer
                })

        },

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

    },

    getters: {

        [getters.isAuthorized]: state => Boolean(state.user),

        [getters.user]: state => state.user,

        [getters.exams]: state => state.exams,

        [getters.questions]: state => state.questions,

        [getters.answers]: state => state.answers,

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
