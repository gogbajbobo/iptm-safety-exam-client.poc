<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { createTestExam } from '@/services/testExamGenerator'

    export default {

        name: 'ExamineeMenu',

        methods: {

            examButtonPressed() { router.push(paths.EXAM_LIST) },

            testExamCreateButtonPressed() { createTestExam() },

        }

    }

</script>

<template>

    <div class="examinee-menu">

        <button @click="examButtonPressed">Список экзаменов</button>
        <button @click="testExamCreateButtonPressed">Создать тестовый экзамен</button>

    </div>

</template>

<style scoped>

    .admin-menu button {
        margin: 10px;
    }

</style>