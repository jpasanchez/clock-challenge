<template>
  <div class="analog-clock">
    <div>{{ this.$store.getters.currentHours }}</div>
    <div>{{ this.$store.getters.currentMinutes }}</div>
    <div>{{ (this.$store.getters.currentSeconds + decal) % 60 }}</div>
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
  mounted() {
    console.log(`${this.$store.getters.currentMasterTime.hours} : ${this.$store.getters.currentMasterTime.minutes} : ${this.$store.getters.currentMasterTime.seconds}`);
  },
};
</script>

<style scoped lang="scss"></style>
