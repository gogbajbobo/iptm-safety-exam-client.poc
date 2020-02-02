<script>

    import Main from './components/Main'

    export default {
        name: 'app',
        components: {
            Main
        },
        created() {
            this.$socket.emit('message', 'App.vue created')
        }
    }

</script>

<template>

    <div id="app">

        <img alt="Vue logo" src="./assets/iptm_logo.png">
        <Main title="Экзамены по охране труда и технике безопасности"/>

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
