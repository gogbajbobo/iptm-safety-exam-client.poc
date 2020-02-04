import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'


Vue.use(Router)

const login = {
    path: '/login',
    name: Login.name,
    component: Login,
    meta: {
        anonymousAccess: true
    }
}

const routes = [
    login
]

const router = new Router({
    routes
})

const anonymousAccessRoutes = routes
    .filter(route => route.meta && route.meta.anonymousAccess)
    .map(route => route.name)

router.beforeEach((to, from, next) => {

    const isAuthorized = false

    if (!isAuthorized) {

        if (anonymousAccessRoutes.includes(to.name)) {
            return next()
        } else {
            return next({ name: Login.name })
        }

    }

    return next()

})

export default router
