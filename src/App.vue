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
    setInterval(this.updateMasterClock, 1000);
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

      const UTCDateMilliseconds = UTCDate.getTime();

      this.$store.commit('initMasterClock', {
        UTCDateMilliseconds,
      });
    },
    updateMasterClock() {
      this.$store.commit('updateMasterClock');
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
