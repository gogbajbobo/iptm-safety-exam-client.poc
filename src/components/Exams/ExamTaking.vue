<script>

    import { helper } from '@/services/helper'
    import { messages } from '@/services/messages'
    import { userRoles } from '@/services/constants'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    import ExamTakingQuestion from '@/components/Exams/ExamTakingQuestion'
    import ExamTimer from '@/components/Exams/ExamTimer'


    export default {

        name: 'ExamTaking',

        components: { ExamTakingQuestion, ExamTimer },

        props: {
            examId: { type: String },
        },

        data() {
            return {
                runTimer: false,
            }
        },

        computed: {

            user() { return store.getters[getters.user] },
            questions() { return store.getters[getters.questions] },
            isExaminee() { return helper.isExaminee(this.user) },

        },

        created() {
            this.showInformation()
        },

        methods: {

            showInformation() {

                messages.confirm('Время на экзамен 10 минут. Выберите ответы на вопросы.')
                    ? this.getQuestions()
                    : router.push(paths.EXAM_LIST)

            },

            getQuestions() {

                if (!this.isExaminee) return

                const payload = { exam: this.examId, role: userRoles.examinee }
                const action = store.dispatch(actions.getQuestions, payload).then(() => this.runTimer = true)
                return helper.loaderWithAction(this, action)

            },

            timerFinished() {
                messages.alert('Ваше время истекло.')
            },

        },

    }

</script>

<template>

    <div>

        <span>ExamTaking</span>

        <exam-timer :timer-value="10"
                    :run-timer="runTimer"
                    @timer-finished="timerFinished"></exam-timer>

        <template v-for="question in questions">

            <exam-taking-question :question="question"
                                  :key="question.id"></exam-taking-question>

        </template>

    </div>

</template>

<style scoped>

</style>