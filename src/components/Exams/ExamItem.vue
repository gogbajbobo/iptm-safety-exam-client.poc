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

        <article v-if="exam">

            <h3>{{ exam.id }}. {{ exam.title }}</h3>

        </article>

    </div>

</template>

<style scoped>

</style>