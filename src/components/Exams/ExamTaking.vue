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
                examDataObject: {},
            }
        },

        computed: {

            user() { return store.getters[getters.user] },
            exam() { return store.getters[getters.examById](this.examId) || { title: '' } },
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
                if (!this.examId) return

                const getExamAction = this.exam ? Promise.resolve()
                                                : store.dispatch(actions.getExamById, this.examId)

                const payload = { exam: this.examId, role: userRoles.examinee }
                const getQuestionsAction = store.dispatch(actions.getQuestions, payload)

                const combinedAction = getExamAction.then(() => getQuestionsAction).then(() => this.runTimer = true)

                return helper.loaderWithAction(this, combinedAction)

            },

            timerFinished() {

                messages.alert('Ваше время истекло.')
                this.runTimer = false

            },

            checkAnswersButtonClicked() {

                if (this.runTimer)
                    if (!messages.confirm('У вас ещё есть время. Закончить экзамен и проверить ответы?'))
                        return

                this.runTimer = false

                this.$nextTick(this.checkAnswers)

            },

            checkAnswers() {

                const action = store.dispatch(actions.checkAnswers, this.examDataObject)
                    .then(result => messages.alert(`Правильных ответов: ${ result }`))
                return helper.loaderWithAction(this, action)

            },

        },

        watch: {

            runTimer: function () {

                const examData = new FormData(this.$refs.examTakingForm)
                examData.forEach((value, key) => this.examDataObject[key] = value)

            }

        }

    }

</script>

<template>

    <div>

        <fieldset>

            <legend>

                <span>{{ exam.title }}</span>

                <exam-timer class="exam-timer"
                            :timer-value="10"
                            :run-timer="runTimer"
                            @timer-finished="timerFinished"></exam-timer>

            </legend>

            <form ref="examTakingForm">

                <template v-for="(question, index) in questions">

                    <exam-taking-question :question="question"
                                          :index="index+1"
                                          :disabled="!runTimer"
                                          :key="question.id"></exam-taking-question>

                </template>

            </form>

            <button @click="checkAnswersButtonClicked">Проверить ответы</button>

        </fieldset>

    </div>

</template>

<style scoped>

    .exam-timer {
        float: right;
        padding-left: 8px;
    }

</style>