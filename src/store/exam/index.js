import { mutations, actions, getters } from '@/store/constants'
import { sendMessageToServer as send } from '@/socket'


const initialState = {
    exams: [],
}

const examStore = {

    state: initialState,

    mutations: {

        [mutations.setExams]: (state, exams) => state.exams = exams,

        [mutations.flushExams]: state => state.exams = initialState.exams,

        [mutations.addExam]: (state, exam) => state.exams = state.exams.concat(exam),

        [mutations.replaceExam]: (state, exam) => state.exams = state.exams.map(e => exam.id === e.id ? exam : e),

        [mutations.deleteExam]: (state, id) => state.exams = state.exams.filter(exam => exam.id !== id),

    },

    actions: {

        [actions.createExam]: ({ commit }, payload) => {

            return send({ action: actions.createExam, payload })
                .then(exam => {
                    commit(mutations.addExam, exam)
                    return exam
                })

        },

        [actions.flushExams]: ({ commit }) => commit(mutations.flushExams),

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

    },

    getters: {

        [getters.exams]: state => state.exams,

    },

}


export default examStore
