<template>
  <div class="analog-clock">
    <div class="analog-clock__container">
      <div class="analog-clock__hours"
           :style="{
             transform: `rotate(${this.$store.getters.currentHours * 30}deg) translateY(-50%)`}">
      </div>
      <div class="analog-clock__minutes"
           :style="{
             transform: `rotate(${this.$store.getters.currentMinutes * 6}deg) translateY(-50%)`}">
      </div>
      <div class="analog-clock__seconds"
           :style="{
             transform: `rotate(${this.$store.getters.currentSeconds * 6}deg) translateY(-50%)`}">
      </div>
    </div>
<!--    <div>{{ this.$store.getters.currentHours }}</div>-->
<!--    <div>{{ this.$store.getters.currentMinutes }}</div>-->
<!--    <div>{{ (this.$store.getters.currentSeconds + decal) % 60 }}</div>-->
  </div>
</template>

<script>
export default {
  name: 'AnalogClock',
  props: {
    decal: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
  .analog-clock {
    display: inline-flex;
    padding-top: 50%;
    width: 50%;
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
