<template>
  <div class="clock">
    <h1>hi</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      intervalId: null,
      time: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
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

      const UTCTimeHours = UTCDate.getHours();
      const UTCTimeMinutes = UTCDate.getMinutes();
      const UTCTimeSeconds = UTCDate.getSeconds();

      console.log(`${UTCTimeHours} : ${UTCTimeMinutes} : ${UTCTimeSeconds}`);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
