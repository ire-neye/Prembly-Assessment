**Project Overview**

This project contains automated end-to-end (E2E) tests for both an API and a web user interface using Cypress.

- **API Tests (public_apis.cy.js):** Tests interactions with the Public APIs resource ([https://api.publicapis.org/](https://api.publicapis.org/)).
- **UI Tests (ui-tests.cy.js):** Tests login and sorting features on the Sauce Demo website ([https://www.saucedemo.com/](https://www.saucedemo.com/)).

**Prerequisites**

- Node.js and npm (or yarn)

**Setup Instructions**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ire-neye/Prembly-Assessment.git

   ```
2. **Install dependencies:**

   ```bash
   cd <api-tests>
   npm init -y
   npm install -D cypress@13.7.2
   ```

   ```bash
   cd <ui-tests>
   npm init -y
   npm install -D cypress@13.7.2
   ```

**Running Tests**

- **To run all tests locally using Cypress Test Runner:**
  ```bash
  npx cypress open
  ```
- **To run using GitLab CI/CD pipeline:**
  1. Set up a GitLab project and push your code.
  2. The included `.gitlab-ci.yml` file defines the CI/CD pipeline and will automatically run tests.

**Test Reports**

Test reports, screenshots, videos, and JUnit XML outputs will be saved in the Cypress results directory. If using GitLab CI/CD, these will be available as downloadable artifacts within your pipelines.

**Contents**

- `public_apis.cy.js`: Cypress API test suite.
- `ui-tests.cy.js`: Cypress UI test suite.
- `main.yml`: Github CI/CD configuration file.
- `cypress.json`: Cypress configuration file (optional)

**Example Test Scenario**

- **`public_apis.cy.js`**

  - Fetches APIs from `https://api.publicapis.org/entries`
  - Verifies successful response (status code 200)
  - Filters for APIs having the category 'Authentication & Authorization'
  - Asserts that at least one matching API is found

- **`ui-tests.cy.js`**
  - Logs into the Sauce Demo website
  - Sorts products by name (A-Z) and verifies order
  - Sorts products by name (Z-A) and verifies order

**Let me know if you want to include more specific details or instructions in your README!**

## Running Tests in CI/CD
This project is configured to run automated tests through GitHub Actions. Here's how to find the test results:
  - Go to the "Actions" Tab
  - Click on the workflow name.
  - You'll see a list of workflow runs. Click on the most recent run.

  - Explore Jobs and Artifacts:
  - Within the run, you'll see individual jobs (e.g., "API Tests," "UI Tests"). Click on a job to see its logs and potential test results.
  - Look for an "Artifacts" section at the bottom of the workflow run page. Here you may find screenshots, videos, and test reports.
