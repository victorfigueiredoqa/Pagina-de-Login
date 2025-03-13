const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://practicetestautomation.com/practice-test-login/',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
