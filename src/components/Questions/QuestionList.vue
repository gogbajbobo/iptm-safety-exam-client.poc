<script>

import store from '@/store'
import { actions, getters } from '@/store/constants'

import { helper } from '@/services/helper'
import { userRoles } from '@/services/constants'

import router from '@/router'
import { paths } from '@/router/paths'
import { messages } from '@/services/messages'

import QuestionItem from './QuestionItem'


export default {

    name: 'QuestionList',

    components: { QuestionItem },

    props: {
        examId: { type: [ String, Number ] },
    },

    computed: {
        user() { return store.getters[getters.user] },
        questions() { return store.getters[getters.questions] },
        isAdmin() { return helper.isAdmin(this.user) },
    },

    beforeCreate() {
        store.dispatch(actions.flushQuestions)
    },

    mounted() {
        this.getQuestions()
    },

    methods: {

        getQuestions() {

            if (!this.isAdmin) return

            const payload = { exam: this.examId, role: userRoles.admin }
            const action = store.dispatch(actions.getQuestions, payload)
            return helper.loaderWithAction(this, action)

        },

        addQuestionButtonPressed() { router.push({ path: `${ paths.QUESTION_FORM }/${ this.examId }` }) },

        editQuestionButtonPressed(question) {
            router.push({ path: `${ paths.QUESTION_FORM }/${this.examId}/${ question?.id }` })
        },

        deleteQuestionButtonPressed(question) {

            if (messages.confirm(`Удалить вопрос ${ question.text }?`)) {
                return helper.loaderWithAction(this, store.dispatch(actions.deleteQuestion, question.id))
            }

        },

    },

}

</script>

<template>

    <div>

        <template v-for="(question, index) in questions">

            <question-item :key="question.id"
                           :question="question"
                           :index="index+1"
                           @edit-question="editQuestionButtonPressed(question)"
                           @delete-question="deleteQuestionButtonPressed(question)">

            </question-item>

        </template>

        <button @click="addQuestionButtonPressed">Добавить вопрос</button>

    </div>

</template>

<style scoped>

</style>