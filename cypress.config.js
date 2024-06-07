const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "http://localhost/INVENTIFY/public/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
