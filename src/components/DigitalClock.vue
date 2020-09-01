<template>
  <div class="clock-section">
    <div class="clock-section__title">{{ title }}</div>
    <div class="digital-clock" v-bind:class="{ 'digital-clock--ticktick' :
    this.$store.getters.ticktick }">
      <div class="digital-clock__container">
        <div class="digital-clock__digit-item">
          <div class="digital-clock__digit">
            {{ this.$store.getters.currentHours | addLeadingZero }}
          </div>
        </div>
        <div class="digital-clock__digit-item">
          <div class="digital-clock__digit">
            {{ this.$store.getters.currentMinutes | addLeadingZero }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DigitalClock',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  filters: {
    addLeadingZero(number) {
      return number < 10 ? `0${number}` : number.toString();
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
