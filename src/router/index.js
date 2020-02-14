import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import EventBus, { events } from '@/services/event.bus'
import store from '@/store'
import { getters } from '@/store/constants'
import { checkSocket } from '@/socket'


Vue.use(Router)

const login = {
    path: '/login',
    name: Login.name,
    component: Login,
    meta: {
        anonymousAccess: true
    }
}

const _ = {
    path: '/',
    redirect: { name: Main.name }
}

const main = {
    path: '/main',
    name: Main.name,
    component: Main,
    meta: {
        anonymousAccess: false
    }
}

const routes = [
    login,
    _, main,
]

const router = new Router({
    routes
})

const anonymousAccessRoutes = routes
    .filter(route => route.meta && route.meta.anonymousAccess)
    .map(route => route.name)

router.beforeEach((to, from, next) => {

    checkSocket()

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

const loginHandler = () => router.push({ name: Main.name })
const logoutHandler = () => router.push({ name: Login.name })

EventBus.$on(events.LOGIN, loginHandler)
EventBus.$on(events.LOGOUT, logoutHandler)


export default router
