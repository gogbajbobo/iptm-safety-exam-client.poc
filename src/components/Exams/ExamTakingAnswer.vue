<script>

    export default {

        name: 'ExamTakingAnswer',

        props: {
            index: { type: Number },
            questionId: { type: [ String, Number ] },
            answer: { type: Object },
        },

    }

</script>

<template>

    <div>

        <input type="radio"
               title="answer-button"
               :name="questionId"
               :value="answer.id">
        {{ index }}:
        {{ answer.id }} {{ answer.text }}
<!--        {{ answer.isCorrect }}-->

    </div>

</template>

<style scoped>

</style>