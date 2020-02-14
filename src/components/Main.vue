<script>

    import socket from '@/socket'
    import { SOCKET } from '@/socket/events'

    export default {

        name: 'Main',

        methods: {
            testButtonClicked() { socket.emit(SOCKET.MESSAGE, 'test button clicked')}
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