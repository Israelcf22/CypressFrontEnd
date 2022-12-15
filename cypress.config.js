const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //aqui definiremos toda la configuracion de Cypress ejemplo aqui podemos poner basUrl: https://trato.dev.rappi.com/
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
});
