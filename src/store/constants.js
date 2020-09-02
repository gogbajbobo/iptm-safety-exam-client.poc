export const mutations = {

    flushState: 'flushState',

    setUser: 'setUser',

    setExams: 'setExams',
    flushExams: 'flushExams',
    addExam: 'addExam',
    replaceExam: 'replaceExam',
    deleteExam: 'deleteExam',

    setQuestions: 'setQuestions',
    flushQuestions: 'flushQuestions',
    addQuestion: 'addQuestion',
    replaceQuestion: 'replaceQuestion',
    deleteQuestion: 'deleteQuestion',

    setAnswers: 'setAnswers',
    flushAnswers: 'flushAnswers',
    addAnswer: 'addAnswer',
    replaceAnswer: 'replaceAnswer',
    deleteAnswer: 'deleteAnswer',

}

export const actions = {

    login: 'login',
    logout: 'logout',

    createExam: 'createExam',
    flushExams: 'flushExams',
    getExams: 'getExams',
    updateExam: 'updateExam',
    deleteExam: 'deleteExam',

    createQuestion: 'createQuestion',
    flushQuestions: 'flushQuestions',
    getQuestions: 'getQuestions',
    updateQuestion: 'updateQuestion',
    deleteQuestion: 'deleteQuestion',

    createAnswer: 'createAnswer',
    flushAnswers: 'flushAnswers',
    getAnswers: 'getAnswers',
    updateAnswer: 'updateAnswer',
    setAnswerAsCorrect: 'setAnswerAsCorrect',
    deleteAnswer: 'deleteAnswer',

}

export const getters = {

    isAuthorized: 'isAuthorized',
    user: 'user',
    exams: 'exams',
    questions: 'questions',
    answers: 'answers'

}
