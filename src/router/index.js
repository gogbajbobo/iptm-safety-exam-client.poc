import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Main from '@/components/Main'
import ExamList from '@/components/Exams/ExamList'
import ExamCreate from '@/components/Exams/ExamCreate'

import EventBus, { events } from '@/services/event.bus'

import store from '@/store'
import { getters } from '@/store/constants'

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
    meta: {
        anonymousAccess: false
    }
}

const exams = {
    path: paths.EXAM_LIST,
    name: ExamList.name,
    component: ExamList,
}

const examCreate = {
    path: paths.EXAM_CREATE,
    name: ExamCreate.name,
    component: ExamCreate
}

const routes = [
    login,
    _, main,
    exams,
    examCreate,
]

const router = new Router({
    routes
})

const anonymousAccessRoutes = routes
    .filter(route => route.meta && route.meta.anonymousAccess)
    .map(route => route.name)

router.beforeEach((to, from, next) => {

    const isAuthorized = store.getters[getters.isAuthorized]

    if (!isAuthorized) {

        if (anonymousAccessRoutes.includes(to.name)) {
            return next()
        } else {
            return next({ name: Login.name })
        }

    }

    return next()

})

const loginHandler = () => router.push(paths.MAIN)
const logoutHandler = () => router.push(paths.LOGIN)

EventBus.$on(events.LOGIN, loginHandler)
EventBus.$on(events.LOGOUT, logoutHandler)


export default router
