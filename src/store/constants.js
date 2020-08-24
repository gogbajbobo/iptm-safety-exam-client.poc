export const mutations = {

    setUser: 'set user',

    setExams: 'set exams',
    addExam: 'add exam',
    replaceExam: 'replace exam',
    deleteExam: 'delete exam',

    setQuestions: 'set questions',
    addQuestion: 'add question',
    replaceQuestion: 'replace question',
    deleteQuestion: 'delete question',

    setAnswers: 'set answers',
    addAnswer: 'add answer',
    replaceAnswer: 'replace answer',
    deleteAnswer: 'delete answer',

}

export const actions = {

    login: 'login',
    logout: 'logout',

    createExam: 'create exam',
    getExams: 'get exams',
    updateExam: 'update exam',
    deleteExam: 'delete exam',

    createQuestion: 'create question',
    getQuestions: 'get questions',
    updateQuestion: 'update question',
    deleteQuestion: 'delete question',

    createAnswer: 'create answer',
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
