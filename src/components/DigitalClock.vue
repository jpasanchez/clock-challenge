<template>
  <div class="digital-clock">
    <div>{{ this.$store.getters.currentHours }}</div>
    <div>{{ this.$store.getters.currentMinutes }}</div>
    <input type="button" value="+ 1 minute" @click="incrementMinutes">
    <div>{{ this.$store.getters.currentSeconds }}</div>
    <input type="button" value="+ 1 Second" @click="incrementSeconds">
  </div>
</template>

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
    background: red;
  }
</style>
