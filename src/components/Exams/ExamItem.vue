<script>

    export default {

        name: 'ExamItem',

        props: {
            exam: { type: Object }
        },

        methods: {

            editButtonPressed() { this.$emit('edit-exam') },
            deleteButtonPressed() { this.$emit('delete-exam') },

        },

    }

</script>

<template>

    <div>

        <article v-if="exam" class="exam-item-article">

            <h3>{{ exam.id }}. {{ exam.title }}</h3>

            <button @click="editButtonPressed">Редактировать</button>
            <button @click="deleteButtonPressed">Удалить</button>

        </article>

    </div>

</template>

<style scoped>

    .exam-item-article {
        padding-bottom: 1em;
        border-bottom: thin gray solid;
    }

</style>