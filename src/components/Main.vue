<script>

    import socket from '@/socket'

    export default {

        name: 'Main',

        methods: {
            testButtonClicked() { socket.sendMessageToServer('test button clicked') }
        }

    }

</script>

<template>

    <div>
        <button @click="testButtonClicked">Test</button>
    </div>

</template>

<style scoped>

</style>