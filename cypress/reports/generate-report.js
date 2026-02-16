const report = require('multiple-cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const reportOutputDir = './cypress/reports/html';
const jsonOutputDir = './cypress/cucumber-json';

<<<<<<< HEAD
// Check if JSON directory exists and has files
if (!fs.existsSync(jsonOutputDir)) {
  console.error(`Error: JSON directory not found at ${jsonOutputDir}`);
  console.log('Make sure to run tests first: npm run cypress:run');
  process.exit(1);
}

const jsonFiles = fs.readdirSync(jsonOutputDir).filter(file => file.endsWith('.json'));
if (jsonFiles.length === 0) {
  console.error(`Error: No cucumber JSON files found in ${jsonOutputDir}`);
  console.log('Make sure tests ran successfully and generated JSON output');
  process.exit(1);
}

console.log(`Found ${jsonFiles.length} JSON file(s) to process`);

=======
>>>>>>> 10656d9bf783d89be09ebdaf739411511d9cdd4e
async function generateReport() {
  await fs.ensureDir(reportOutputDir);

  report.generate({
    jsonDir: jsonOutputDir,
    reportPath: reportOutputDir,
    metadata: {
      browser: {
<<<<<<< HEAD
        name: 'chrome',
        version: '120'
      },
      device: 'Local test machine',
      platform: {
        name: 'Mac',
        version: 'Sonoma'
      },
    },
    customData: {
      title: 'Cypress Test Execution Report',
      data: [
        { label: 'Project', value: 'Cypress TypeScript Cucumber' },
        { label: 'Execution', value: new Date().toLocaleString() }
      ]
    }
  });

  console.log(`✓ HTML report generated successfully at ${reportOutputDir}/index.html`);
=======
        name: 'chrome'
      },
      device: 'Local test machine',
      platform: {
        name: 'Mac'
      },
    },
  });
>>>>>>> 10656d9bf783d89be09ebdaf739411511d9cdd4e
}

generateReport();