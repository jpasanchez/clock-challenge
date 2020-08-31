<template>
  <div class="digital-clock">
    <div>{{ this.$store.getters.currentMasterTime.hours }}</div>
    <div>{{ this.$store.getters.currentMasterTime.minutes }}</div>
    <div>{{ (this.$store.getters.currentMasterTime.seconds + decal) % 60 }}</div>
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
  },
};
</script>

<style scoped lang="scss">
  .digital-clock {
    background: red;
  }
</style>
