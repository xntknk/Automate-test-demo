const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8o54pk',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',  // Customizable directory
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Ensure to register the plugin properly
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    // Example, customize as needed
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
