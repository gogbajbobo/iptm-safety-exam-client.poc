<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import { messages } from '@/services/messages'
    import { helper } from '@/services/helper'

    import ExamItem from '@/components/Exams/ExamItem'
    // import ExamForm from '@/components/Exams/ExamForm'

    export default {

        name: 'ExamList',

        components: { ExamItem },

        computed: {
            exams() { return store.getters[getters.exams] }
        },

        mounted() {
            return helper.loaderWithAction(this, store.dispatch(actions.getExams))
        },

        methods: {

            addExamButtonPressed() { router.push(paths.EXAM_FORM) },

            editExamButtonPressed(exam) { router.push({ path: `${ paths.EXAM_FORM }/${ exam?.id }` }) },

            deleteExamButtonPressed(exam) {

                if (messages.confirm(`Удалить экзамен ${ exam.title }?`)) {
                    return helper.loaderWithAction(this, store.dispatch(actions.deleteExam, exam.id))
                }

            },

        }

    }

</script>

<template>

    <div>

        <h2>Список экзаменов:</h2>

        <hr>

        <template v-for="exam in exams">

            <exam-item :exam="exam"
                       :key="exam.id"
                       @edit-exam="editExamButtonPressed(exam)"
                       @delete-exam="deleteExamButtonPressed(exam)"/>

        </template>

        <button @click="addExamButtonPressed">Добавить экзамен</button>

    </div>

</template>

<style scoped>

</style>