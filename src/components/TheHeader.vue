<script>

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    export default {

        name: 'TheHeader',

        computed: {

            isAuthorized() { return store.getters[getters.isAuthorized] },

            isMainPage() { return this.$route.path === paths.MAIN },

        },

        methods: {

            logout() { store.dispatch(actions.logout) },

            backToMainPage() { router.push(paths.MAIN) },

        },

    }

</script>

<template>

    <div>

        <img alt="Vue logo" src="../assets/iptm_logo.png">
        <h1>Экзамены по охране труда и технике безопасности</h1>

        <template v-if="isAuthorized">

            <button v-if="!isMainPage" @click="backToMainPage">На главную</button>
            <button @click="logout">Выход</button>

        </template>

    </div>

</template>

<style scoped>

</style>