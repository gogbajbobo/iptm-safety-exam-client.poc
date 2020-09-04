<script>

    export default {

        name: 'ExamTakingAnswer',

        props: {
            index: { type: Number },
            questionId: { type: [ String, Number ] },
            answer: { type: Object },
            examFinished: { type: Boolean },
        },

    }

</script>

<template>

    <div>

        <input type="radio"
               ref="radioInput"
               title="answer-button"
               :disabled="examFinished"
               :name="questionId"
               :value="answer.id">
        {{ index }}:
        {{ answer.id }} {{ answer.text }}

    </div>

</template>

<style scoped>

</style>