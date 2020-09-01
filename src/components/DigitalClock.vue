<template>
  <div class="digital-clock"
       v-bind:class="{ 'digital-clock--ticktick' : this.$store.getters.ticktick }">
    <div class="digital-clock__container">
      <div class="digital-clock__digit-item">
        <div class="digital-clock__digit">{{ this.$store.getters.currentHours }}</div>
      </div>
      <div class="digital-clock__digit-item">
        <div class="digital-clock__digit">{{ this.$store.getters.currentMinutes }}</div>
      </div>
    </div>
  </div>
</template>

<!--      <input type="button" value="+ 1 minute" @click="incrementMinutes">-->
<!--      <div>{{ this.$store.getters.currentSeconds }}</div>-->
<!--      <input type="button" value="+ 1 Second" @click="incrementSeconds">-->

<script>
export default {
  name: 'DigitalClock',
  props: {
    decal: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    console.log(`${this.$store.getters.currentMasterTime.hours} : ${this.$store.getters.currentMasterTime.minutes} : ${this.$store.getters.currentMasterTime.seconds}`);
  },
  methods: {
    incrementSeconds() {
      this.$store.commit('incrementSecond');
    },
    incrementMinutes() {
      this.$store.commit('incrementMinute');
    },
  },
};
</script>

<style scoped lang="scss">
  .digital-clock {
    display: inline-flex;
    padding-top: 25%;
    width: 50%;
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
        color: white;
        font-size: 8vmax;
      }
    }

    &__digit-item {
      flex: 1;
      color: #ffffff;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    &__digit {
      font-size: 8vmax;
    }

    &--ticktick {
      .digital-clock__container {
        &::before {
          visibility: hidden;
        }
      }
    }
  }
</style>
