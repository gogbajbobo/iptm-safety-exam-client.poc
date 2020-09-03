<script>

    import ExamTakingAnswer from '@/components/Exams/ExamTakingAnswer'


    export default {

        name: 'ExamTakingQuestion',

        components: { ExamTakingAnswer },

        props: {
            question: { type: Object },
        },

    }

</script>

<template>

    <div>
        {{ question.id }} {{ question.text }}
        <template v-for="answer in question.answers">
            <exam-taking-answer :answer="answer" :key="answer.id"></exam-taking-answer>
        </template>
    </div>

</template>

<style scoped>

</style>