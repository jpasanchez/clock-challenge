import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  mutations: {
    initMasterClock(state, payload) {
      state.time = payload.UTCDateMilliseconds;
    },
    updateMasterClock(state) {
      state.time += 1000;
    },
    incrementSecond(state) {
      state.time += 1000;
    },
    incrementMinute(state) {
      state.time += 60000;
    },
  },
  getters: {
    currentMasterTime(state) {
      return state.time;
    },
    currentHours(state) {
      return new Date(state.time).getHours();
    },
    currentMinutes(state) {
      return new Date(state.time).getMinutes();
    },
    currentSeconds(state) {
      return new Date(state.time).getSeconds();
    },
  },
  actions: {
  },
  modules: {
  },
});
