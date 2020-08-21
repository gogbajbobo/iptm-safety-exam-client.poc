export const mutations = {

    setUser: 'set user',
    setExams: 'set exams',
    addExam: 'add exam',
    replaceExam: 'replace exam',
    deleteExam: 'delete exam',

    setQuestions: 'set questions',
    deleteQuestion: 'delete question',

}

export const actions = {

    login: 'login',
    logout: 'logout',

    createExam: 'create exam',
    getExams: 'get exams',
    updateExam: 'update exam',
    deleteExam: 'delete exam',

    getQuestions: 'get questions',
    deleteQuestion: 'delete question',

}

export const getters = {

    isAuthorized: 'isAuthorized',
    user: 'user',
    exams: 'exams',
    questions: 'questions',

}
