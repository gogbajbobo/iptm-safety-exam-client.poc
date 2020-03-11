<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { messages } from '@/services/messages'


    export default {

        name: 'ExamForm',

        props: {
            id: { type: String, default: null },
        },

        data() {
            return {
                examForm: {
                    title: null
                }
            }
        },

        computed: {

            legendTitle() { return this.id ? 'Экзамен:' : 'Новый экзамен:' },
            submitButtonTitle() { return this.id ? 'Изменить экзамен' : 'Создать экзамен' },

        },

        methods: {

            submitExamButtonPressed() {

                store.dispatch(actions.createExam, this.examForm)
                    .then(() => router.push(paths.EXAM_LIST))
                    .catch(messages.error)

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