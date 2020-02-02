<script>

    export default {

        name: 'Login',

        data() {
            return {
                username: undefined,
                password: undefined
            }
        },

        methods: {
            login() {
                // eslint-disable-next-line no-console
                console.log(this.username, this.password)
            }
        }

    }

</script>

<template>

    <div>

        <div>
            <label for="username">Имя пользователя: </label>
            <input class="username-input" id="username" v-model="username"/>
        </div>

        <div>
            <label for="password">Пароль: </label>
            <input class="password-input"  id="password" type="password" v-model="password"/>
        </div>

        <button class="login-button" @click="login">Вход</button>

    </div>

</template>

<style scoped>

    div {
        margin-bottom: 8px;
    }

    .username-input, .password-input, .login-button {
        width: 128px;
        padding: 1px;
        border-radius: 8px;
    }

    .username-input, .password-input {
        height: 18px;
        border: thin solid lightgray;
    }

    .login-button {
        height: 22px;
        border: none;
        background-color: lightblue;
    }

    .login-button:hover {
        background-color: lightskyblue;
        font-weight: bold;
    }

</style>