<script>

    import { helper } from '@/services/helper'

    export default {

        name: 'ExamItem',

        props: {
            user: { type: Object },
            exam: { type: Object },
        },

        computed: {
            isAdmin() { return helper.isAdmin(this.user) },
        },

        methods: {

            editButtonPressed() { this.isAdmin && this.$emit('edit-exam') },
            deleteButtonPressed() { this.isAdmin && this.$emit('delete-exam') },

        },

    }

</script>

<template>

    <div>

        <article v-if="exam" class="exam-item-article">

            <h3>{{ exam.id }}. {{ exam.title }} </h3>

            <template v-if="isAdmin">

                <button @click="editButtonPressed">Редактировать</button>
                <button @click="deleteButtonPressed">Удалить</button>

            </template>

        </article>

    </div>

</template>

<style scoped>

    .exam-item-article {
        padding-bottom: 1em;
        border-bottom: thin gray solid;
    }

    .exam-item-article h3 {
        display: inline;
    }

</style>