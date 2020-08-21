export const mutations = {

    setUser: 'set user',
    setExams: 'set exams',
    addExam: 'add exam',
    replaceExam: 'replace exam',
    deleteExam: 'delete exam',

    setQuestions: 'set questions',

}

export const actions = {

    login: 'login',
    logout: 'logout',

    createExam: 'create exam',
    getExams: 'get exams',
    updateExam: 'update exam',
    deleteExam: 'delete exam',

}

export const getters = {

    isAuthorized: 'isAuthorized',
    user: 'user',
    exams: 'exams',
    questions: 'questions',

}
