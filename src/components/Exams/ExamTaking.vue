<script>

    import { helper } from '@/services/helper'
    import { userRoles } from '@/services/constants'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import ExamTakingQuestion from '@/components/Exams/ExamTakingQuestion'


    export default {

        name: 'ExamTaking',

        components: { ExamTakingQuestion },

        props: {
            examId: { type: String },
        },

        computed: {

            user() { return store.getters[getters.user] },
            questions() { return store.getters[getters.questions] },
            isExaminee() { return helper.isExaminee(this.user) },

        },

        mounted() {
            this.getQuestions()
        },

        methods: {

            getQuestions() {

                if (!this.isExaminee) return

                const payload = { exam: this.examId, role: userRoles.examinee }
                const action = store.dispatch(actions.getQuestions, payload)
                return helper.loaderWithAction(this, action)

            },

        },

    }

</script>

<template>

    <div>
        ExamTaking

        <template v-for="question in questions">
            <exam-taking-question :question="question" :key="question.id"></exam-taking-question>
        </template>

    </div>

</template>

<style scoped>

</style>