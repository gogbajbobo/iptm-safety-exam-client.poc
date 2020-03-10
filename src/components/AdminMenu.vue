<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    export default {

        name: 'AdminMenu',

        methods: {

            examButtonPressed() { router.push(paths.EXAM_LIST) }

        }

    }

</script>

<template>

    <div>

        <button @click="examButtonPressed">Экзамены</button>

    </div>

</template>

<style scoped>

</style>