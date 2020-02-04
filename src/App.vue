<script>

    import TheHeader from '@/components/TheHeader'
    import { events } from '@/socket'

    export default {

        name: 'app',

        components: { TheHeader },

        created() {
            this.$socket.emit('message', 'App.vue created')
        },

        sockets: events,

    }

</script>

<template>

    <div id="app">

        <the-header/>

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
