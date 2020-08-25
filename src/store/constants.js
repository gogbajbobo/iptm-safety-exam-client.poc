export const mutations = {

    flushState: 'flush state',

    setUser: 'set user',

    setExams: 'set exams',
    flushExams: 'flush exams',
    addExam: 'add exam',
    replaceExam: 'replace exam',
    deleteExam: 'delete exam',

    setQuestions: 'set questions',
    flushQuestions: 'flush question',
    addQuestion: 'add question',
    replaceQuestion: 'replace question',
    deleteQuestion: 'delete question',

    setAnswers: 'set answers',
    flushAnswers: 'flush answers',
    addAnswer: 'add answer',
    replaceAnswer: 'replace answer',
    deleteAnswer: 'delete answer',

}

export const actions = {

    login: 'login',
    logout: 'logout',

    createExam: 'create exam',
    flushExams: 'flush exams',
    getExams: 'get exams',
    updateExam: 'update exam',
    deleteExam: 'delete exam',

    createQuestion: 'create question',
    flushQuestions: 'flush question',
    getQuestions: 'get questions',
    updateQuestion: 'update question',
    deleteQuestion: 'delete question',

    createAnswer: 'create answer',
    flushAnswers: 'flush answers',
    getAnswers: 'get answers',
    updateAnswer: 'update answer',
    setAnswerAsCorrect: 'set answer as correct',
    deleteAnswer: 'delete answer',

}

export const getters = {

    isAuthorized: 'isAuthorized',
    user: 'user',
    exams: 'exams',
    questions: 'questions',
    answers: 'answers'

}
