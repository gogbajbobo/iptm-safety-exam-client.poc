<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import { helper } from '@/services/helper'

    import ExamResultItem from '@/components/ExamResults/ExamResultItem'


    export default {

        name: 'ExamResultList',

        components: { ExamResultItem },

        data() {
            return {
                examResults: [],
            }
        },

        mounted() {
            this.getResults()
        },

        methods: {
            getResults() {
                return helper.loaderWithAction(
                    this,
                    store.dispatch(actions.getExamResults).then(results => this.examResults = results)
                )
            },
        },

    }

</script>

<template>

    <div>

        <h2>Результаты:</h2>

        <hr>

        <template v-for="examResult in examResults">

            <exam-result-item :examResult="examResult"
                              :key="examResult.id"></exam-result-item>

        </template>

    </div>

</template>

<style scoped>

</style>