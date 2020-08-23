<script>

import _ from 'lodash'

import router from '@/router'
import { paths } from '@/router/paths'

import store from '@/store'
import { getters } from '@/store/constants'


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

    methods: {

        examsButtonPressed() { router.push({ path: paths.EXAM_LIST }) },
        questionsButtonPressed() { router.push({ path: `${ paths.EXAM_FORM }/${ this.examId }` }) },
        answersButtonPressed() {
            router.push({ path: `${ paths.QUESTION_FORM }/${ this.examId }/${ this.questionId }` })
        },

        submitAnswerButtonPressed() {},

    },

    watch: {

        answerForm: {
            handler: function () {

                if (!this.answer) {

                    this.formIsPristine = !this.answerForm.text
                    return

                }

                const answer = Object.keys(this.answer).reduce((result, key) => {

                    if (key !== 'isCorrect') result[key] = this.answer[key]
                    return result

                }, {})

                this.formIsPristine = _.isEqual(this.answerForm, answer)

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