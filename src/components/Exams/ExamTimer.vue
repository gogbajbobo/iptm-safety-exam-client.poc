<script>

    export default {

        name: 'ExamTimer',

        props: {
            timerValue: { type: Number },
            runTimer: { type: Boolean },
        },

        data() {
            return {
                timer: null,
                timeLeft: null,
            }
        },

        computed: {

            formattedTimeLeft() {

                const { timeLeft } = this

                const minutes = Math.floor(timeLeft / 60)
                const seconds = timeLeft % 60

                return `${ minutes }:${ seconds < 10 ? '0' + seconds : seconds }`

            },

        },

        methods: {

            startTimer() {

                if (!this.timerValue) return

                this.timeLeft = this.timerValue

                this.timer = setInterval(() => {
                    this.timeLeft ? this.timeLeft -= 1 : this.stopTimer()
                }, 1000)

            },

            stopTimer() {

                if (!this.timer) return

                clearInterval(this.timer)
                this.$emit('timer-finished')
                this.timer = null

            },

        },

        watch: {
            runTimer: function () {
                this.runTimer ? this.startTimer() : this.stopTimer()
            },
        },

    }

</script>

<template>

    <div>
        {{ formattedTimeLeft }}
    </div>

</template>

<style scoped>

</style>