<script>

export default {

    name: 'AnswerItem',

    props: {
        answer: { type: Object },
        index: { type: Number },
    },

    methods: {

        editButtonPressed() { this.$emit('edit-answer') },
        deleteButtonPressed() { this.$emit('delete-answer') },
        correctAnswerSelected() {

            if (!this.answer.isCorrect) {

                this.$refs['radioInput'].checked = false
                this.$emit('correct-answer-selected')

            }

        },

    },

}

</script>

<template>

    <div>

        <input type="radio"
               ref="radioInput"
               title="correct-answer-button"
               name="correct-answer"
               :checked="answer.isCorrect"
               :value="answer.id"
               @change="correctAnswerSelected">
        {{ index }}:
        {{ answer.text }}
        <button @click="editButtonPressed">Редактировать</button>
        <button @click="deleteButtonPressed">Удалить</button>
        <hr>

    </div>

</template>

<style scoped>

</style>