<script>

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    export default {

        name: 'TheHeader',

        computed: {
            isAuthorized() { return store.getters[getters.isAuthorized] }
        },

        methods: {
            logout() { store.dispatch(actions.logout) }
        }

    }

</script>

<template>

    <div>

        <img alt="Vue logo" src="../assets/iptm_logo.png">
        <h1>Экзамены по охране труда и технике безопасности</h1>

        <button v-if="isAuthorized" @click="logout">Logout</button>

    </div>

</template>

<style scoped>

</style>