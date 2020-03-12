<script>

    export default {

        name: 'ExamItem',

        props: {
            exam: { type: Object }
        }

    }

</script>

<template>

    <div>

        <article v-if="exam" class="exam-item-article">

            <h3>{{ exam.id }}. {{ exam.title }}</h3>

        </article>

    </div>

</template>

<style scoped>

    .exam-item-article {
        padding-bottom: 1em;
        border-bottom: thin gray solid;
    }

</style>