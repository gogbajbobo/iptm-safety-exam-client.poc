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
            isExaminee() { return helper.isExaminee(this.user) },
        },

        methods: {

            editButtonPressed() { this.isAdmin && this.$emit('edit-exam') },
            deleteButtonPressed() { this.isAdmin && this.$emit('delete-exam') },
            startExamButtonPressed() { this.isExaminee && this.$emit('start-exam') },

        },

    }

</script>

<template>

    <div>

        <article v-if="exam" class="exam-item-article">

            <h3>
                <span v-if="isAdmin">{{ exam.id }}. </span>
                <span>{{ exam.title }} </span>
            </h3>

            <template v-if="isAdmin">

                <button @click="editButtonPressed">Редактировать</button>
                <button @click="deleteButtonPressed">Удалить</button>

            </template>

            <template v-if="isExaminee">
                <button @click="startExamButtonPressed">Начать экзамен</button>
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