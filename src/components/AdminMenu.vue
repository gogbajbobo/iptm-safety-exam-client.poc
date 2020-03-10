<script>

    import logger from '@/services/logger'

    export default {

        name: 'AdminMenu',

        methods: {

            examButtonPressed() { logger.info('exam button pressed') }

        }

    }

</script>

<template>

    <div>

        <button @click="examButtonPressed">Экзамены</button>

    </div>

</template>

<style scoped>

</style>