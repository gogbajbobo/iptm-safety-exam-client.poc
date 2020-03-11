<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import { logger } from '@/services/logger'


    export default {

        name: 'ExamForm',

        methods: {
            createExamButtonPressed() {
                store.dispatch(actions.createExam)
                    .then(data => logger.info(data))
            },
        }

    }

</script>

<template>

    <div>

        <form name="createExamForm">

            <fieldset>

                <legend>Новый экзамен:</legend>

                <label for="title">Название: </label>
                <input type="text" name="title" id="title"/>

            </fieldset>

        </form>

        <button @click="createExamButtonPressed">Создать экзамен</button>

    </div>

</template>

<style scoped>

</style>