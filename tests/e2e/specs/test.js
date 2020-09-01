// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.clocks')
      .assert.elementPresent('.clocks__controls')
      .assert.containsText('.clocks__controls button:nth-of-type(1)', '+ 1 hour')
      .assert.elementCount('section', 1)
      .end();
  },

  'example e2e test using a custom command': (browser) => {
    browser
      .openHomepage()
      .assert.elementPresent('.clocks')
      .end();
  },
};
