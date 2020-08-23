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

    },

}

</script>

<template>

    <div>

        {{ index }}:
        {{ answer.text }}
        <button @click="editButtonPressed">Редактировать</button>
        <button @click="deleteButtonPressed">Удалить</button>
        <hr>

    </div>

</template>

<style scoped>

</style>