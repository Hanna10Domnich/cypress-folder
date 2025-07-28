const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        // Folder where your test specs are located
        specPattern: 'cypress/integration/**/*.js',
        baseUrl: 'https://www.saucedemo.com', // Default baseUrl
        supportFile: 'cypress/support/index.js',
        setupNodeEvents(on, config) {
            // implement node event listeners here if needed
        },
    },
    dev: {
        envName: 'dev',
        baseUrl: 'https://www.saucedemo.com',
    },
});
