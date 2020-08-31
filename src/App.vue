<template>
  <div id="app">
    <DigitalClock />
    <AnalogClock :decal='4' />
  </div>
</template>

<script>
import DigitalClock from './components/DigitalClock.vue';
import AnalogClock from './components/AnalogClock.vue';

export default {
  name: 'App',
  components: {
    DigitalClock,
    AnalogClock,
  },
  created() {
    this.createUTCTime();
    this.intervalId = setInterval(this.createUTCTime, 1000);
  },
  methods: {
    createUTCTime() {
      const localDate = new Date();
      const UTCDate = new Date(
        localDate.getUTCFullYear(),
        localDate.getUTCMonth(),
        localDate.getUTCDate(),
        localDate.getUTCHours(),
        localDate.getUTCMinutes(),
        localDate.getUTCSeconds(),
        localDate.getUTCMilliseconds(),
      );

      this.$store.commit('initMasterClock', {
        UTCDate,
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
