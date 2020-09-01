import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AnalogClock from '@/components/AnalogClock.vue';

const $store = {
  state: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  mutations: {
  },
  getters: {
    currentHours(state) {
      return state.hours;
    },
    currentMinutes(state) {
      return state.minutes;
    },
    currentSeconds(state) {
      return state.seconds;
    },
  },
  actions: {
  },
  modules: {
  },
};

describe('AnalogClock.vue', () => {
  it('renders props.city when passed', () => {
    const title = 'Montreal';
    const wrapper = shallowMount(AnalogClock, {
      propsData: { title },
      mocks: {
        // adds mocked `$$store` object to the Vue instance
        // before mounting component
        $store,
      },
    });
    expect(wrapper.text()).to.include(title);
  });
});
