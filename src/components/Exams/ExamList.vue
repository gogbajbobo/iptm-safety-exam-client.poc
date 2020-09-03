<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import { messages } from '@/services/messages'
    import { helper } from '@/services/helper'

    import ExamItem from '@/components/Exams/ExamItem'


    export default {

        name: 'ExamList',

        components: { ExamItem },

        computed: {

            user() { return store.getters[getters.user] },
            exams() { return store.getters[getters.exams] },
            isAdmin() { return helper.isAdmin(this.user) },

        },

        beforeCreate() {
            store.dispatch(actions.flushExams)
        },

        mounted() {
            return helper.loaderWithAction(this, store.dispatch(actions.getExams))
        },

        methods: {

            addExamButtonPressed() { this.isAdmin && router.push(paths.EXAM_FORM) },

            editExamButtonPressed(exam) { this.isAdmin && router.push({ path: `${ paths.EXAM_FORM }/${ exam?.id }` }) },

            deleteExamButtonPressed(exam) {

                if (!this.isAdmin) return

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
                       :user="user"
                       @edit-exam="editExamButtonPressed(exam)"
                       @delete-exam="deleteExamButtonPressed(exam)"/>

        </template>

        <button v-if="isAdmin" @click="addExamButtonPressed">Добавить экзамен</button>

    </div>

</template>

<style scoped>

</style>