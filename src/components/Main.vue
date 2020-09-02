<script>

    import { helper } from '@/services/helper'

    import store from '@/store'
    import { getters } from '@/store/constants'

    import AdminMenu from '@/components/AdminMenu'
    import ExamineeMenu from '@/components/ExamineeMenu'


    export default {

        name: 'Main',

        components: { AdminMenu, ExamineeMenu },

        computed: {

            user() { return store.getters[getters.user] },
            isAdmin() { return helper.isAdmin(this.user) },
            isExaminee() { return helper.isExaminee(this.user) },

        },

        methods: {

        },

    }

</script>

<template>

    <div>

        <div v-if="isAdmin">
            {{ user.roles }}
            <admin-menu></admin-menu>
        </div>

        <div v-if="isExaminee">
            {{ user.roles }}
            <examinee-menu></examinee-menu>
        </div>

    </div>

</template>

<style scoped>

</style>