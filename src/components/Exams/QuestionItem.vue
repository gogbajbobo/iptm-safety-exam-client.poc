<script>

export default {

    name: 'QuestionItem',

    props: {
        question: { type: Object },
        index: { type: Number },
    },

    methods: {

        editButtonPressed() { this.$emit('edit-question') },
        deleteButtonPressed() { this.$emit('delete-question') },

    }

}

</script>

<template>

    <div>

        {{ index }}:
        {{ question.text }}
        <button @click="editButtonPressed">Редактировать</button>
        <button @click="deleteButtonPressed">Удалить</button>
        <hr>

    </div>

</template>

<style scoped>

</style>