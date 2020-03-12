<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { messages } from '@/services/messages'


    export default {

        name: 'ExamForm',

        props: {
            exam: { type: Object },
        },

        data() {
            return {
                examForm: {
                    title: null
                }
            }
        },

        computed: {

            legendTitle() { return this.exam ? 'Экзамен:' : 'Новый экзамен:' },
            submitButtonTitle() { return this.exam ? 'Изменить экзамен' : 'Создать экзамен' },

        },

        methods: {

            submitExamButtonPressed() {

                const loader = this.$loading.show()

                return store.dispatch(actions.createExam, this.examForm)
                    .then(() => router.push(paths.EXAM_LIST))
                    .catch(messages.error)
                    .then(loader.hide)

            },

        }

    }

</script>

<template>

    <div>

        <form name="examForm">

            <fieldset>

                <legend>{{ legendTitle }}</legend>

                <label for="title">Название: </label>
                <input type="text" name="title" id="title" required v-model="examForm.title" />

            </fieldset>

        </form>

        <button @click="submitExamButtonPressed">{{ submitButtonTitle }}</button>

    </div>

</template>

<style scoped>

</style>