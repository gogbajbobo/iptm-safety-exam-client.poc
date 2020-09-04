<script>

    import { helper } from '@/services/helper'
    import { messages } from '@/services/messages'
    import { userRoles } from '@/services/constants'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import ExamTakingQuestion from '@/components/Exams/ExamTakingQuestion'
    import router from '@/router';
    import {paths} from '@/router/paths';


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