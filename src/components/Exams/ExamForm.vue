<script>

    import _ from 'lodash'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { helper } from '@/services/helper'
    // import { logger } from '@/services/logger'

    import QuestionForm from './QuestionForm'


    export default {

        name: 'ExamForm',

        components: { QuestionForm },

        props: {
            examId: { type: String },
        },

        data() {
            return {
                examForm: {
                    title: null,
                },
                formIsPristine: true,
            }
        },

        computed: {

            exams() { return store.getters[getters.exams] },
            exam() { return this.exams.find(exam => exam.id === Number(this.examId)) },
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

        },

        watch: {

            examForm: {
                handler: function () {
                    this.formIsPristine = _.isEqual(this.examForm, this.exam)
                },
                deep: true,
            }

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
                    <question-form :exam-id="exam.id"></question-form>
                </div>

            </fieldset>

        </form>

        <button @click="submitExamButtonPressed" :disabled="formIsPristine">Сохранить экзамен</button>

    </div>

</template>

<style scoped>

</style>