<script>

    import TheHeader from '@/components/TheHeader'
    import socket from '@/socket'
    import { SOCKET } from '@/socket/events'

    export default {

        name: 'app',

        components: { TheHeader },

        created() {
            socket.emit(SOCKET.MESSAGE, 'App.vue created')
        },

    }

</script>

<template>

    <div id="app">

        <the-header/>
        <router-view/>

    </div>

</template>


<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
