<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
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

      console.log(`${this.$store.getters.currentMasterTime.hours} : ${this.$store.getters.currentMasterTime.minutes} : ${this.$store.getters.currentMasterTime.seconds}`);
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
