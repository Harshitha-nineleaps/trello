const { defineConfig } = require("cypress");
async function setupNodeEvents(on,config){
  return config;

}
module.exports = defineConfig({
  e2e: {

    setupNodeEvents,
      // implement node event listeners here
      specPattern :"/home/nineleaps/Desktop/trello/cypress/Cypress/*.js"
    
  },
});