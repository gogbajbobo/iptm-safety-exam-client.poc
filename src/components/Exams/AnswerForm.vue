<script>

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

    computed: {

        exam() { return store.getters[getters.exams].find(exam => exam.id === Number(this.examId)) },
        question() { return store.getters[getters.questions].find(q => q.id === Number(this.questionId)) },
        answer() { return store.getters[getters.answers].find(a => a.id === Number(this.answerId)) },
        answerTitle() { return this.answer ? this.answer.text : 'Новый ответ' },

    },

    methods: {

        examsButtonPressed() { router.push({ path: paths.EXAM_LIST }) },
        questionsButtonPressed() { router.push({ path: `${ paths.EXAM_FORM }/${ this.examId }` }) },

    },

}

</script>

<template>

    <div>

        <button @click="examsButtonPressed">Экзамены</button>

        <fieldset>

            <legend>Экзамен: {{ exam.title }}</legend>

            <button @click="questionsButtonPressed">Вопросы</button>

        </fieldset>

    </div>

</template>

<style scoped>

</style>