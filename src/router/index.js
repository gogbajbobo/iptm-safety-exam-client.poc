import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'
import ExamList from '@/components/Exams/ExamList'
import ExamForm from '@/components/Exams/ExamForm'
import ExamTaking from '@/components/Exams/ExamTaking'
import QuestionForm from '@/components/Questions/QuestionForm'
import AnswerForm from '@/components/Answers/AnswerForm'

import EventBus, { events } from '@/services/event.bus'

import store from '@/store'
import { getters } from '@/store/constants'

import { checkSocket } from '@/socket'
import { userRoles } from '@/services/constants'
import { paths } from '@/router/paths'

Vue.use(Router)

const login = {
    path: paths.LOGIN,
    name: Login.name,
    component: Login,
    meta: {
        anonymousAccess: true
    }
}

const _ = {
    path: paths.ROOT,
    redirect: { name: Main.name }
}

const main = {
    path: paths.MAIN,
    name: Main.name,
    component: Main,
    // meta: {
    //     anonymousAccess: false
    // }
}

const exams = {
    path: paths.EXAM_LIST,
    name: ExamList.name,
    component: ExamList,
}

const examForm = {
    path: `${ paths.EXAM_FORM }/:examId?`,
    name: ExamForm.name,
    component: ExamForm,
    props: true,
    meta: {
        requireRoles: [ userRoles.admin ],
    },
}

const examTaking = {
    path: `${ paths.EXAM_TAKING }/:examId`,
    name: ExamTaking.name,
    component: ExamTaking,
    props: true,
    meta: {
        requireRoles: [ userRoles.examinee ],
    },
}

const questionForm = {
    path: `${ paths.QUESTION_FORM }/:examId/:questionId?`,
    name: QuestionForm.name,
    component: QuestionForm,
    props: true,
    meta: {
        requireRoles: [ userRoles.admin ],
    },
}

const answerForm = {
    path: `${ paths.ANSWER_FORM }/:examId/:questionId/:answerId?`,
    name: AnswerForm.name,
    component: AnswerForm,
    props: true,
    meta: {
        requireRoles: [ userRoles.admin ],
    },
}

const routes = [
    login,
    _, main,
    exams,
    examForm,
    examTaking,
    questionForm,
    answerForm,
]

const router = new Router({
    routes
})

const anonymousAccessRoutes = routes
    .filter(route => route.meta && route.meta.anonymousAccess)
    .map(route => route.name)

router.beforeEach((to, from, next) => {

    const isAuthorized = store.getters[getters.isAuthorized]

    checkSocket(isAuthorized)

    if (!isAuthorized) {

        return anonymousAccessRoutes.includes(to.name)
            ? next()
            : next({ name: Login.name })

    }

    if (isAuthorized)
        return checkRoles(to, from, next)

})

const checkRoles = (to, from, next) => {

    const { requireRoles } = to.meta
    const { roles } = store.getters[getters.user]

    if (!requireRoles) return next()

    requireRoles.some(role => roles.includes(role))
        ? next()
        : next({ name: 'Main' })

}


const loginHandler = () => router.push(paths.MAIN)
const logoutHandler = () => router.push(paths.LOGIN)

EventBus.$on(events.LOGIN, loginHandler)
EventBus.$on(events.LOGOUT, logoutHandler)


export default router
