<template>
  <div id="app">
    <Clock />
    <Clock :decal='4' />
  </div>
</template>

<script>
import Clock from './components/Clock.vue';

export default {
  name: 'App',
  components: {
    Clock,
  },
  // data() {
  //   return {
  //     decal: 4,
  //   };
  // },
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
