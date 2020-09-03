<script>

    export default {

        name: 'ExamTakingAnswer',

        props: {
            answer: { type: Object },
        },

    }

</script>

<template>

    <div>
        {{ answer.id }} {{ answer.text }}
    </div>

</template>

<style scoped>

</style>