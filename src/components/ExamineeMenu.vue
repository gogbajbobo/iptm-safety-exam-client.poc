<script>

    import router from '@/router'
    import { paths } from '@/router/paths'

    export default {

        name: 'ExamineeMenu',

        methods: {
            examButtonPressed() { router.push(paths.EXAM_LIST) },
        }

    }

</script>

<template>

    <div class="examinee-menu">
        <button @click="examButtonPressed">Список экзаменов</button>
    </div>

</template>

<style scoped>

    .examinee-menu button {
        margin: 10px;
    }

</style>