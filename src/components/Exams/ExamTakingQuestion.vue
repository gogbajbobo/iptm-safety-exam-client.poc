<script>

    import ExamTakingAnswer from '@/components/Exams/ExamTakingAnswer'


    export default {

        name: 'ExamTakingQuestion',

        components: { ExamTakingAnswer },

        props: {
            index: { type: Number },
            question: { type: Object },
            examFinished: { type: Boolean },
        },

    }

</script>

<template>

    <fieldset>

        <legend>Вопрос {{ index }}</legend>

        {{ question.id }} {{ question.text }}

        <template v-for="(answer, index) in question.answers">

            <exam-taking-answer :answer="answer"
                                :index="index+1"
                                :question-id="question.id"
                                :exam-finished="examFinished"
                                :key="answer.id"></exam-taking-answer>

        </template>

    </fieldset>

</template>

<style scoped>

</style>