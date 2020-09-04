<script>

    import ExamTakingAnswer from '@/components/Exams/ExamTakingAnswer'


    export default {

        name: 'ExamTakingQuestion',

        components: { ExamTakingAnswer },

        props: {
            index: { type: Number },
            question: { type: Object },
        },

    }

</script>

<template>

    <fieldset>

        <legend>Вопрос {{ index }}</legend>

        {{ question.id }} {{ question.text }}

        <input type="hidden" :name="question.id">

        <template v-for="(answer, index) in question.answers">

            <exam-taking-answer :answer="answer"
                                :index="index+1"
                                :question-id="question.id"
                                :key="answer.id"></exam-taking-answer>

        </template>

    </fieldset>

</template>

<style scoped>

</style>