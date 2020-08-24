<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { createTestExam } from '@/services/testExamGenerator'

    export default {

        name: 'AdminMenu',

        methods: {

            examButtonPressed() { router.push(paths.EXAM_LIST) },

            testExamCreateButtonPressed() { createTestExam() },

        }

    }

</script>

<template>

    <div class="admin-menu">

        <button @click="examButtonPressed">Экзамены</button>
        <button @click="testExamCreateButtonPressed">Создать тестовый экзамен</button>

    </div>

</template>

<style scoped>

    .admin-menu button {
        margin: 10px;
    }

</style>