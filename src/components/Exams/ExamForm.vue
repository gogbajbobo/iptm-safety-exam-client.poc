<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { helper } from '@/services/helper'

    import QuestionForm from './QuestionForm'


    export default {

        name: 'ExamForm',

        components: { QuestionForm },

        props: {
            exam: { type: Object },
        },

        data() {
            return {
                examForm: {
                    title: null,
                },
            }
        },

        computed: {
            legendTitle() { return this.exam ? `Экзамен ${ this.exam.title }:` : 'Новый экзамен:' },
        },

        mounted() {
            this.examForm = { ...this.exam }
        },

        methods: {

            submitAction() {

                const examAction = this.exam ? actions.updateExam : actions.createExam

                return store.dispatch(examAction, this.examForm)
                    .then(() => router.push(paths.EXAM_LIST))

            },

            submitExamButtonPressed() { return helper.loaderWithAction(this, this.submitAction()) },

        }

    }

</script>

<template>

    <div>

        <form name="examForm">

            <fieldset>

                <legend>{{ legendTitle }}</legend>

                <label for="title">Название: </label>
                <input type="text" name="title" id="title" required v-model="examForm.title" />
                <hr>

                <div v-if="exam">
                    <question-form></question-form>
                </div>

            </fieldset>

        </form>

        <button @click="submitExamButtonPressed">Сохранить экзамен</button>

    </div>

</template>

<style scoped>

</style>