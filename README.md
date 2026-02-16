Cypress TypeScript Project with Cucumber and HTML Reporting

Project Overview:
-----------------

This project is a Cypress automation framework using TypeScript and Cucumber for Behavior-Driven Development (BDD). It includes support for generating detailed HTML reports with multiple-cucumber-html-reporter.

**Key Features:**
- BDD approach using Cucumber (Gherkin syntax)
- TypeScript for type safety
- Page Object Model (POM) design pattern
- Parallel test execution support
- Tag-based test filtering
- Automated HTML report generation
- Support for both UI and API testing

**Tech Stack:**
- Cypress 14.1.0
- TypeScript 5.8.2
- @badeball/cypress-cucumber-preprocessor 24.0.0
- multiple-cucumber-html-reporter 3.9.2

**PreRequisites:**
- Node.js (latest LTS version recommended)
- npm or yarn package manager

**Installation & Setup**

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/harveyspecter007/cypress-typescript-cucumber.git
cd cypress_typescript
```

2️⃣ **Install Dependencies**

```bash
npm install
```

**Project Structure:**
```
cypress/
├── e2e/
│   ├── features/          # Cucumber feature files (.feature)
│   ├── pages/             # Page Object Model classes
│   └── step_definitions/  # Step definition files
├── fixtures/              # Test data files
├── reports/               # Generated test reports
│   ├── cucumber-json/     # JSON reports (auto-generated)
│   └── html/              # HTML reports (auto-generated)
└── support/               # Support files and custom commands
```

Running Tests:
--------------

**Interactive Mode (Cypress Test Runner)**

```bash
npm run cypress:open
```
Opens the Cypress Test Runner UI for interactive test development and debugging.

**Headless Mode (CI/CD)**

```bash
npm run cypress:run
```
Runs all tests in headless mode, suitable for CI/CD pipelines.

**Run Specific Feature File**

```bash
npx cypress run --spec "cypress/e2e/features/Login.feature"
```

**Run Tests with Tags**

```bash
npx cypress run --env tags="@Test"
```
Executes only scenarios tagged with @Test.

**Parallel Execution**

```bash
node run-parallel.js
```
Runs feature files in parallel for faster execution.

Generating HTML Reports:
-----------------------

**Step 1: Run Tests**

```bash
npm run cypress:run
```
This generates JSON reports in `cypress/cucumber-json/results.json`

**Step 2: Generate HTML Report**

```bash
npm run generate-report
```
This processes the JSON and creates an HTML report at `cypress/reports/html/index.html`

**View Report**

Open `cypress/reports/html/index.html` in your browser to view the detailed test execution report with:
- Test execution summary
- Pass/Fail statistics
- Detailed scenario results
- Screenshots (if configured)
- Execution timestamps

**Writing Tests:**
-----------------

**1. Create Feature File**

Create a `.feature` file in `cypress/e2e/features/`:

```gherkin
Feature: User Login

  Scenario: Successful login
    Given I visit "https://example.com"
    When I enter valid credentials
    Then I should see the dashboard
```

**2. Create Step Definitions**

Create corresponding step definitions in `cypress/e2e/step_definitions/`:

```typescript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit {string}', (url: string) => {
  cy.visit(url);
});
```

**3. Create Page Objects**

Create page classes in `cypress/e2e/pages/`:

```typescript
export default class LoginPage {
  private selectors = {
    username: "#username",
    password: "#password"
  };
  
  login(username: string, password: string) {
    cy.get(this.selectors.username).type(username);
    cy.get(this.selectors.password).type(password);
  }
}
```

**Configuration:**
-----------------

- `cypress.config.ts` - Main Cypress configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Cucumber preprocessor settings

**Troubleshooting:**
-------------------

**Issue: JSON reports not generated**
- Ensure `package.json` has the correct cucumber preprocessor configuration
- Check that tests are running successfully

**Issue: HTML report is empty**
- Verify JSON files exist in `cypress/cucumber-json/`
- Run `npm run generate-report` after test execution

**Issue: TypeScript errors**
- Run `npm install` to ensure all dependencies are installed
- Check `tsconfig.json` configuration

**Contributing:**
----------------

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

**License:**
-----------

ISC

