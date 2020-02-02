<script>

    import Login from '@/components/Login'

    export default {

        name: 'Main',

        components: { Login },

        props: {
            title: String
        }

    }

</script>

<template>

    <div>
        <h1>{{ title }}</h1>
        <login/>
    </div>

</template>

<style scoped>

</style>