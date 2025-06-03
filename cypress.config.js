const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },

    env: {
      allureResultsPath: "allure-results",
      baseUrl: 'https://practicetestautomation.com/practice-test-login/',
      viewportWidth: 1920,
      viewportHeight: 1080,
      password: 'Password123'
    },
  },
} );
