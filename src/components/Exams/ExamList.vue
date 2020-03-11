<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    import store from '@/store'
    import { actions, getters } from '@/store/constants'

    import { messages } from '@/services/messages'

    export default {

        name: 'ExamList',

        computed: {
            exams() { return store.getters[getters.exams] }
        },

        mounted() {

            const loader = this.$loading.show()

            return store.dispatch(actions.getExams)
                .catch(messages.error)
                .then(loader.hide)

        },

        methods: {
            addExamButtonPressed() { router.push(paths.EXAM_FORM) }
        }

    }

</script>

<template>

    <div>

        <h2>Список экзаменов:</h2>

        <template v-for="exam in exams">

            <article :key="exam.id">

                <h3>{{ exam.id }}. {{ exam.title }}</h3>

            </article>

        </template>

        <button @click="addExamButtonPressed">Добавить экзамен</button>

    </div>

</template>

<style scoped>

</style>