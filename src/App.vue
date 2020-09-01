<template>
  <div id="app">
    <section class="clocks">
      <div class="clocks__side clocks__side--digital">
        <DigitalClock />
      </div>
      <div class="clocks__side clocks__side--analog">
        <AnalogClock :decal='4' />
      </div>
      <div class="clocks__controls">
        <button @click="incrementHours">+ 1 hour</button>
        <button @click="incrementMinutes">+ 1 minute</button>
        <button @click="incrementSeconds">+ 1 Second</button>
      </div>
    </section>
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
    setInterval(this.ticktick, 500);
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
    ticktick() {
      this.$store.commit('ticktick');
    },
    incrementSeconds() {
      this.$store.commit('incrementSecond');
    },
    incrementMinutes() {
      this.$store.commit('incrementMinute');
    },
    incrementHours() {
      this.$store.commit('incrementHour');
    },
  },
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'digital-7regular';
    src: url('assets/digital-7-webfont.woff2') format('woff2'),
    url('assets/digital-7-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .clocks {
    display: flex;
    background: #0059b3;

    &__side {
      flex: 1;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        padding: 20px;
        font-size: 3vmax;
        color: #ffffff;
      }

      &--digital {
        &::before {
          content: 'UTC TIME NOW';
        }
      }

      &--analog {
        &::before {
          content: 'MONTREAL TIME NOW';
        }
      }
    }

    button {
      border: 0;
      border-radius: 0.25rem;
      background: #ffdf01;
      color: #000000;
      font-weight: 700;
      line-height: 1.2;
      white-space: nowrap;
      text-decoration: none;
      font-size: 1.5vmax;
      padding: 1rem 1.5rem;
      margin: 0.25rem;
      cursor: pointer;
    }
  }

  @media (max-width: 991px) {
    .clocks {
      flex-direction: column;

      &__side {
        padding: 40px 0;
        flex-direction: column;
      }

      &__controls {
        position: static;
      }
    }
  }

  @media (min-width: 992px) {
    .clocks {
      &__controls {
        position: absolute;
        display: flex;
        left: 50%;
        flex-direction: column;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &__side {
        &::before {
          position: absolute;
          top: 12%;
        }
      }
    }
  }
</style>
