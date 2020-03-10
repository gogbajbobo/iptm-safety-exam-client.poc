<script>

    import router from '@/router'

    export default {

        name: 'AdminMenu',

        methods: {

            examButtonPressed() { router.push({ path: '/exams' }) }

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