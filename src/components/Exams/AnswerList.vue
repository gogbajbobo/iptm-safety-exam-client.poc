<script>

import store from '@/store'
import { actions, getters } from '@/store/constants'
import { helper } from '@/services/helper'


import AnswerItem from '@/components/Exams/AnswerItem'


export default {

    name: 'AnswerList',

    components: { AnswerItem },

    props: {
        examId: { type: [ String, Number ] },
        questionId: { type: [ String, Number ] },
    },

    computed: {
        answers() { return store.getters[getters.answers] },
    },

    mounted() {
        this.getAnswers()
    },

    methods: {

        getAnswers() {

            const action = store.dispatch(actions.getAnswers, { question: this.questionId })
            return helper.loaderWithAction(this, action)

        },

        addAnswerButtonPressed() {
        },

        editAnswerButtonPressed(answer) {},

        deleteAnswerButtonPressed(answer) {},

    },

}

</script>

<template>

<div>

    <template v-for="(answer, index) in answers">

        <answer-item :key="answer.id"
                     :answer="answer"
                     :index="index+1"
                     @edit-answer="editAnswerButtonPressed(answer)"
                     @delete-answer="deleteAnswerButtonPressed(answer)">

        </answer-item>

    </template>

    <button @click="addAnswerButtonPressed">Добавить ответ</button>

</div>

</template>

<style scoped>

</style>