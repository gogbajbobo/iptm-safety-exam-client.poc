<script>

import _ from 'lodash'

import router from '@/router'
import { paths } from '@/router/paths'

import store from '@/store'
import { actions, getters } from '@/store/constants'
import { helper } from '@/services/helper'


export default {

    name: 'AnswerForm',

    props: {
        examId: { type: [ String, Number ] },
        questionId: { type: [ String, Number ] },
        answerId: { type: [ String, Number ] },
    },

    data() {
        return {
            answerForm: {
                text: null,
            },
            formIsPristine: true,
        }
    },

    computed: {

        exam() { return store.getters[getters.exams].find(exam => exam.id === Number(this.examId)) },
        question() { return store.getters[getters.questions].find(q => q.id === Number(this.questionId)) },
        answer() { return store.getters[getters.answers].find(a => a.id === Number(this.answerId)) },
        answerText() { return this.answer ? this.answer.text : 'Новый ответ' },

    },

    mounted() {
        this.refreshAnswerForm()
    },

    methods: {

        refreshAnswerForm() { this.answerForm = { ...this.answer } },

        examsButtonPressed() { router.push({ path: paths.EXAM_LIST }) },
        questionsButtonPressed() { router.push({ path: `${ paths.EXAM_FORM }/${ this.examId }` }) },
        answersButtonPressed() {
            router.push({ path: `${ paths.QUESTION_FORM }/${ this.examId }/${ this.questionId }` })
        },

        submitAnswerButtonPressed() {

            const answerAction = this.answer ? actions.updateAnswer : actions.createAnswer

            const action = store.dispatch(answerAction, { ...this.answerForm, question: this.questionId })
                .then(answer => {
                    this.answerId
                        ? this.refreshAnswerForm()
                        : router.push({
                            path: `${ paths.ANSWER_FORM }/${ this.examId }/${ this.questionId }/${ answer?.id }`
                        })
                            .then(this.refreshAnswerForm)
                })
                .catch(err => alert(err))

            return helper.loaderWithAction(this, action)

        },

    },

    watch: {

        answerForm: {
            handler: function () {
                this.formIsPristine = this.answer ? _.isEqual(this.answerForm, this.answer) : !this.answerForm.text
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

                <legend>Вопрос: {{ question.text }}</legend>

                <button @click="answersButtonPressed">Ответы</button>

                <fieldset>

                    <legend>{{ answerText }}</legend>

                    <label for="answer">Ответ: </label>
                    <input type="text" name="answer" id="answer" required v-model="answerForm.text" />
                    <button @click="submitAnswerButtonPressed" :disabled="formIsPristine">Сохранить</button>

                </fieldset>

            </fieldset>

        </fieldset>

    </div>

</template>

<style scoped>

</style>