<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import { logger } from '@/services/logger'


    export default {

        name: 'ExamForm',

        props: {
            id: { type: String, default: null },
        },

        computed: {

            legendTitle() { return this.id ? 'Экзамен:' : 'Новый экзамен:' },
            submitButtonTitle() { return this.id ? 'Изменить экзамен' : 'Создать экзамен' },

        },

        methods: {

            submitExamButtonPressed() {

                store.dispatch(actions.createExam)
                    .then(data => logger.info(data))

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
                <input type="text" name="title" id="title" required />

            </fieldset>

        </form>

        <button @click="submitExamButtonPressed">{{ submitButtonTitle }}</button>

    </div>

</template>

<style scoped>

</style>