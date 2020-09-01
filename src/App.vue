<template>
  <div id="app">
    <section class="clocks">
      <div class="clocks__side clocks__side--digital">
        <DigitalClock />
      </div>
      <div class="clocks__side clocks__side--analog">
        <AnalogClock :decal='4' />
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

    &__side {
      flex: 1;
      height: 100vh;

      &--digital {
        background: #ff5b93;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &--analog {
        background: #43acff;
      }
    }
  }
</style>
