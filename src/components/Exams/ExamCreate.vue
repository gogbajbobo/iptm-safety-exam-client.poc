<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import { logger } from '@/services/logger'


    export default {

        name: 'ExamCreate',

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
        <button @click="createExamButtonPressed">Создать экзамен</button>
    </div>

</template>

<style scoped>

</style>