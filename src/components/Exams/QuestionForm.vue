<script>

import _ from 'lodash'

import store from '@/store'
import { actions, getters } from '@/store/constants'

import { helper } from '@/services/helper'

import router from '@/router'
import { paths } from '@/router/paths'

import AnswerList from '@/components/Exams/AnswerList'


export default {

    name: 'QuestionForm',

    components: { AnswerList },

    props: {
        examId: { type: [ String, Number ] },
        questionId: { type: [ String, Number ] },
    },

    data() {
        return {
            questionForm: {
                text: null,
            },
            formIsPristine: true,
        }
    },

    computed: {

        exam() { return store.getters[getters.exams].find(exam => exam.id === Number(this.examId)) },
        question() { return store.getters[getters.questions].find(q => q.id === Number(this.questionId)) },
        questionTitle() { return this.question ? this.question.text : 'Новый вопрос' },

    },

    mounted() {
        this.refreshQuestionForm()
    },

    methods: {

        refreshQuestionForm() { this.questionForm = { ...this.question } },

        submitAction() {

            const questionAction = this.question ? actions.updateQuestion : actions.createQuestion

            const action = store.dispatch(questionAction, { ...this.questionForm, exam: this.examId })
                .then(question => {
                    this.questionId
                        ? this.refreshQuestionForm()
                        : router.push({ path: `${ paths.QUESTION_FORM }/${ this.examId }/${ question?.id }` })
                            .then(this.refreshQuestionForm)
                })
                .catch(err => alert(err))

            return helper.loaderWithAction(this, action)

        },

        submitQuestionButtonPressed() { return helper.loaderWithAction(this, this.submitAction()) },
        questionsButtonPressed() { router.push({ path: `${ paths.EXAM_FORM }/${ this.examId }` }) },
        examsButtonPressed() { router.push({ path: paths.EXAM_LIST }) },

    },

    watch: {

        questionForm: {
            handler: function () {

                this.formIsPristine =
                    this.question ? _.isEqual(this.questionForm, this.question) : !this.questionForm.text

            },
            deep: true,
        }

    }

}

</script>

<template>

    <div>

        <button @click="examsButtonPressed">Экзамены</button>

        <fieldset>

            <legend>Экзамен: {{ exam.title }}</legend>

            <button @click="questionsButtonPressed">Вопросы</button>

            <fieldset>

                <legend>{{ questionTitle }}</legend>

                <label for="question">Вопрос: </label>
                <input type="text" name="question" id="question" required v-model="questionForm.text" />
                <button @click="submitQuestionButtonPressed" :disabled="formIsPristine">Сохранить</button>

                <template v-if="question">
                    <hr>
                    Ответы:
                    <hr>
                    <answer-list :exam-id="exam.id" :question-id="question.id"></answer-list>
                </template>

            </fieldset>

        </fieldset>

    </div>

</template>

<style scoped>

</style>