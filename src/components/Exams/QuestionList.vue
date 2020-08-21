<script>

import store from '@/store'
import { actions, getters } from '@/store/constants'

import { helper } from '@/services/helper'

import QuestionItem from './QuestionItem'

export default {

    name: 'QuestionList',

    components: { QuestionItem },

    props: {
        examId: { type: [ String, Number ] },
    },

    computed: {
        questions() { return store.getters[getters.questions] },
    },

    mounted() {
        this.getQuestions()
    },

    methods: {

        getQuestions() {

            const action = store.dispatch(actions.getQuestions, { exam: this.examId })

            return helper.loaderWithAction(this, action)

        },

    },

}

</script>

<template>

<div>

    <template v-for="question in questions">
        <question-item :question="question" :key="question.id"></question-item>
    </template>

</div>

</template>

<style scoped>

</style>