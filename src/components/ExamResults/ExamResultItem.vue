<script>

    export default {

        name: 'ExamResultItem',

        props: {
            examResult: { type: Object }
        }

    }

</script>

<template>

    <div>
        {{ examResult.id }}: {{ examResult.numberOfCorrectAnswers }}
    </div>

</template>

<style scoped>

</style>