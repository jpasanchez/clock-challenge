<template>
  <div class="clock-section">
    <div class="clock-section__title">{{ title }}</div>
    <div class="analog-clock">
      <div class="analog-clock__container">
        <div class="analog-clock__hours"
             :style="{transform: `rotate(${hoursDegrees}deg)translateY(-50%)`}">
        </div>
        <div class="analog-clock__minutes"
             :style="{transform: `rotate(${minutesDegrees}deg) translateY(-50%)`}">
        </div>
        <div class="analog-clock__seconds"
             :style="{transform: `rotate(${secondsDegrees}deg) translateY(-50%)`}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalogClock',
  props: {
    title: {
      type: String,
      default: '',
    },
    hoursAdjustment: {
      type: Number,
      default: -4,
    },
  },
  computed: {
    hoursDegrees() {
      return ((this.$store.getters.currentHours + this.hoursAdjustment) % 24) * 30;
    },
    minutesDegrees() {
      return this.$store.getters.currentMinutes * 6;
    },
    secondsDegrees() {
      return this.$store.getters.currentSeconds * 6;
    },
  },
};
</script>

<style scoped lang="scss">
  .analog-clock {
    display: inline-flex;
    padding-top: 40%;
    width: 40%;
    border-radius: 50%;
    background: black;
    position: relative;
    font-family: 'digital-7regular';

    &__container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: ':';
        position: absolute;
        background: #ffffff;
        padding-top: 15%;
        width: 15%;
        border-radius: 50%;
        height: 0;
      }
    }

    &__hours,
    &__minutes,
    &__seconds {
      background: white;
      position: absolute;
      border-radius: 40px;
    }

    &__hours {
      height: 35%;
      width: 9px;
    }

    &__minutes {
      height: 40%;
      width: 7px;
    }

    &__seconds {
      height: 45%;
      width: 5px;
    }
  }
</style>
