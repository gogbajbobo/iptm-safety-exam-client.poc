<script>

    import socket from '@/socket'

    import helper from '@/services/helper'

    import store from '@/store'
    import { getters } from '@/store/constants'

    import AdminMenu from '@/components/AdminMenu'

    export default {

        name: 'Main',

        components: { AdminMenu },

        computed: {

            user() { return store.getters[getters.user] },
            isAdmin() { return helper.isAdmin(this.user) },

        },

        methods: {
            testButtonClicked() { socket.sendMessageToServer('test button clicked') }
        }

    }

</script>

<template>

    <div>

        <button @click="testButtonClicked">Test</button>

        <div v-if="isAdmin">
            <admin-menu></admin-menu>
        </div>

    </div>

</template>

<style scoped>

</style>