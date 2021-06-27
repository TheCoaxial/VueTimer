<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "></path>
      </g>
    </svg>
    <span class="base-timer__label">
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;
export default {
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
  mounted() {
    this.startTimer();
  },
  
  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed
    },
    formattedTimeLeft() {
      const timeLeft = this.timeLeft

      //The largest round integer less than or equal to the result of time divided by 60
      const minutes = Math.floor(timeLeft / 60)

      // Seconds calculations
      let seconds = timeLeft % 60

      // If the value of seconds is less than 10 then display seconds left with a leading 0
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      // the output in MM:SS format
      return `${minutes}:${seconds}`
    },

    circleDasharray() {
        return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)}283`;
    },
    
    timeFraction() {
      const rawTimeFraction = this.timeLeft/ this.timeLimit

      return rawTimeFraction - (1 / this.timeLimit) * ( 1- rawTimeFraction)
    }
  },

  // props: {
  //   timeLeft: {
  //     type: Number,
  //     required: true
  //   }
  // }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* Sets the containers height and width */
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;
/* Removes SVG styling that would hide the time label */
  &__circle {
    fill: none;
    stroke: none;
  }
/* The SVG path that displays the timer's progress */
  &__path-elapsed {
    stroke-width: 7px;
    stroke:grey;
  }

  &__label {
    position: absolute;
    width: 300px;
    height: 300px;

    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 48px;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__svg {
    transform: scaleX(-1);
  }
}
</style>>



