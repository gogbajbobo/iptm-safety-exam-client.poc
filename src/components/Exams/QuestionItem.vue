<script>

export default {

    name: 'QuestionItem',

    props: {
        question: { type: Object },
        index: { type: Number },
    },

}

</script>

<template>

<div>

    {{ index }}
    {{ question }}
    <hr>

</div>

</template>

<style scoped>

</style>