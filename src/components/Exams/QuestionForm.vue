<script>

export default {

    name: 'QuestionForm',

    props: {
        questionId: { type: [ String, Number ] },
        examId: { type: [ String, Number ] },
    },

    data() {
        return {
            newQuestion: null,
            newAnswer: null,
        }
    },

    methods: {

        addQuestionButtonPressed() {},
        addAnswerButtonPressed() {},

    },

}

</script>

<template>

<div>

    <div>

        {{ questionId || 'new question' }}
        {{ examId || 'no exam' }}

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

</template>

<style scoped>

</style>