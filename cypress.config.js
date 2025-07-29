const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        specPattern: 'cypress/integration/**/*.js',
        supportFile: 'cypress/support/index.js',
        setupNodeEvents(on, config) {
            return config;
        },
    },
});
