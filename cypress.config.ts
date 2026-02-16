import { defineConfig } from 'cypress';
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  
  e2e: {
    specPattern: "cypress/**/*.feature",
    
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config,);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

<<<<<<< HEAD
      // JSON output is configured in package.json
=======
    /*  config.env.cucumberJson = {
        generate: true,
        output: "cypress/cucumber-json/results.json",
      }; */

        // Enable message output
  config.env.CUCUMBER_MESSAGES_ENABLED = true;
  config.env.CUCUMBER_MESSAGES_OUTPUT = "cypress/reports/messages.ndjson";

>>>>>>> 10656d9bf783d89be09ebdaf739411511d9cdd4e
      return config;
    },
    
  },
  
  
});