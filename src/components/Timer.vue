<template>
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <input v-model="message" placeholder="Enter Name">
    <p>Name: {{ message }}</p>
    
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
    <span class="">{{ formattedTimePassed }}</span> 
    
    <span class=""> Attempts:{{ numberOfAttempts }} </span>
    <div></div>
    <div  >
      <div>
      <button class="button"
        @click="startTimer"
      >
      Start Timer
      </button>

      <button class="button"
        @click="pauseTimer"
      >
      Pause Timer
      </button>
      </div>

      <div>
      <button class="button"
        @click="resetTime"
      >
      RESET
      </button>

      <button class="button"
        @click="endTimer"
      >
      End Timer
      </button>
      </div>
    </div>   
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 60;
const ALERT_THRESHOLD = 15;

const audioFile = new Audio(require('../assets/Creepy-clock-chiming.mp3'));


const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};
 
const TIME_LIMIT = 300;
const HALF_HOUR = 1800;
let timerOn = 0;


export default {
  data() {
    return {
      timePassed: 0,
      halfHourTimerInterval: null,
      timerInterval: null,
      halfHourTimer: 0,
      numberOfAttempts: 0,
      message: ""
    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      let timeLeftStill = this.timeLeft;
      const minutes = Math.floor(timeLeftStill / 60);
      let seconds = timeLeftStill % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },
    formattedTimePassed() {
      const halfHour = this.halfHourClock;
      let minutes = Math.floor(halfHour / 60);
      let seconds = halfHour % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeLeft() {   
      return  TIME_LIMIT - this.timePassed;
    },

    halfHourClock() {
      return HALF_HOUR - this.halfHourTimer;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    }
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    }
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
      audioFile.play();
    },

    startTimer() {
      if(timerOn === 0) {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
      this.halfHourTimerInterval = setInterval(() => (this.halfHourTimer += 1), 1000);
      timerOn = 1;
      }
    },

    resetTime() {
      this.numberOfAttempts +=1;
      this.timePassed = 0;
    },

    endTimer() {
      if (confirm("Sure you want to end the timer?")){
      clearInterval(this.timerInterval);
      clearInterval(this.halfHourTimerInterval);
      this.timePassed = 0;
      this.halfHourTimer = 0;
      this.numberOfAttempts = 0;
      audioFile.pause();
      audioFile.currentTime = 0;
      timerOn = 0;
      }
    },

    pauseTimer() {
      clearInterval(this.timerInterval);
      clearInterval(this.halfHourTimerInterval);
      timerOn = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* Sets the containers height and width */
.base-timer {
  position: relative;
  width: 300px;
  height: 150px;
  padding-left: 20px;
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
  &__flex {
    
    justify-content: center;
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
.button {
  width: 50%;
  height: 25px;
}
p {
  font-weight: bold;
}
</style>>



