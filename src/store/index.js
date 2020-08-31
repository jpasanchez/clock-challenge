import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  },
  mutations: {
    initMasterClock(state, payload) {
      state.time.hours = payload.UTCDate.getHours();
      state.time.minutes = payload.UTCDate.getMinutes();
      state.time.seconds = payload.UTCDate.getSeconds();
    },
  },
  getters: {
    currentMasterTime: state => {
      return state.time;
    }
  },
  actions: {
  },
  modules: {
  },
});
