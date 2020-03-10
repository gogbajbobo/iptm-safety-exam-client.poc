<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    export default {

        name: 'ExamList',

        methods: {
            addExamButtonPressed() { router.push(paths.EXAM_CREATE) }
        }

    }

</script>

<template>

    <div>

        Exam List

        <button @click="addExamButtonPressed">Добавить экзамен</button>

    </div>

</template>

<style scoped>

</style>