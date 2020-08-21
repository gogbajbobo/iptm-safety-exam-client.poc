<script>

export default {

    name: 'QuestionItem',

    props: {
        question: { type: Object },
    },

}

</script>

<template>

<div>

    {{ question }}
    <hr>

</div>

</template>

<style scoped>

</style>