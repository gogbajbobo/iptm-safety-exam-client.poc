<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    export default {

        name: 'ExamCreate',

        methods: {
            createExamButtonPressed() { store.dispatch(actions.createExam) },
        }

    }

</script>

<template>

    <div>
        <button @click="createExamButtonPressed">Создать экзамен</button>
    </div>

</template>

<style scoped>

</style>