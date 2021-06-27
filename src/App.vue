<template>

  

  <div id="app">
    <Timer
    :time-left="timeLeft"
    />
  </div>
</template>

<script>
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Timer
  },
  data() {
    return {
      timeLimit: 20,
      timePassed: 0,
      timerInterval: null,
    }
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval (() => (this.timePassed +=1), 1000)
    }
  },
  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    }
  },
  mounted() {
    this.startTimer();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
