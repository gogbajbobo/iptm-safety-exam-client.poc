<script>

import store from '@/store'
import { actions, getters } from '@/store/constants'
import { helper } from '@/services/helper'

export default {

    name: 'AnswerList',

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

    },

}

</script>

<template>

<div>
    AnswerList
</div>

</template>

<style scoped>

</style>