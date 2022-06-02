const { defineConfig } = require("cypress");
const { FacebookSocialLogin } = require("cypress-social-logins").plugins;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      FacebookSocialLogin: FacebookSocialLogin
      chromeWebSecurity: false

    },
  },
});

