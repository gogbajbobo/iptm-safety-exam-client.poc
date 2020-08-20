<script>

    import store from '@/store'
    import { actions } from '@/store/constants'

    import router from '@/router'
    import { paths } from '@/router/paths'

    import { helper } from '@/services/helper'


    export default {

        name: 'ExamForm',

        props: {
            exam: { type: Object },
        },

        data() {
            return {
                examForm: {
                    title: null,
                },
                newQuestion: null,
                newAnswer: null,
            }
        },

        computed: {

            legendTitle() { return this.exam ? `Экзамен ${ this.exam.title }:` : 'Новый экзамен:' },
            submitButtonTitle() { return this.exam ? 'Сохранить экзамен' : 'Создать экзамен' },

        },

        mounted() {
            this.examForm = { ...this.exam }
        },

        methods: {

            submitAction() {

                const examAction = this.exam ? actions.updateExam : actions.createExam

                return store.dispatch(examAction, this.examForm)
                    .then(() => router.push(paths.EXAM_LIST))

            },

            submitExamButtonPressed() { return helper.loaderWithAction(this, this.submitAction()) },
            addQuestionButtonPressed() {},
            addAnswerButtonPressed() {},

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
                <hr>

                <div v-if="exam">

                    <div>

                        <label for="question">Вопрос: </label>
                        <input type="text" name="question" id="question" required v-model="newQuestion" />

                        <div>
                            Ответы:
                            <div>
                                <label for="a">А: </label>
                                <input type="text" id="a" name="a" v-model="newAnswer">
                            </div>

                            <button @click="addAnswerButtonPressed">Добавить ответ</button>

                            <div>

                                <label for="right-answer">Верный ответ: </label>
                                <select name="rightAnswer" id="right-answer">
                                    <option value="1">А</option>
                                    <option value="2">Б</option>
                                    <option value="3">В</option>
                                    <option value="4">Г</option>
                                </select>

                            </div>

                        </div>

                    </div>

                    <hr>
                    <button @click="addQuestionButtonPressed">Добавить вопрос</button>

                </div>

            </fieldset>

        </form>

        <button @click="submitExamButtonPressed">{{ submitButtonTitle }}</button>

    </div>

</template>

<style scoped>

</style>