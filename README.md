# SauceDemo Automation Testing

QA Automation project for testing the SauceDemo web application.

The project demonstrates UI automation, Page Object Model, API testing, performance testing and CI/CD.

## Tech Stack

- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- REST API
- Artillery
- Git
- GitHub Actions

## UI / E2E Testing

Automated scenarios include:

- User login
- Product verification
- Product sorting
- Adding products to cart
- Removing products from cart
- Shopping cart verification
- Checkout process
- Order completion

## Page Object Model

Page Object Model is used to separate page selectors and actions from test scenarios.

Example structure:

```text
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── products.cy.js
│   ├── cart.cy.js
│   └── checkout.cy.js
│
└── pages/
    ├── LoginPage.js
    ├── ProductsPage.js
    ├── CartPage.js
    └── CheckoutPage.js
```

## API Testing

API testing is implemented using Cypress `cy.request()`.

Covered scenarios:

- GET requests
- GET requests with query parameters
- GET single resource
- POST requests
- DELETE requests
- HTTP status code validation
- Response body validation

Example:

```javascript
cy.request({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts/1"
}).then((response) => {

  expect(response.status).to.eq(200);
  expect(response.body.id).to.eq(1);
  expect(response.body.userId).to.eq(1);
  expect(response.body.title).to.not.be.empty;

});
```

## Performance Testing

Artillery is used for API load testing.

The project includes:

- GET requests
- GET requests with query parameters
- POST requests
- HTTP status validation
- Virtual users
- Request rate configuration

Example:

```yaml
config:
  target: "https://httpbin.org"

  phases:
    - duration: 10
      arrivalRate: 2
```

Run Artillery:

```bash
artillery run cypress/artillery/load-test.yml
```

## CI/CD

GitHub Actions is used to automatically run Cypress tests after pushing changes to the `main` branch.

Pipeline:

```text
git push
    ↓
GitHub Actions
    ↓
Install dependencies
    ↓
Run Cypress tests
    ↓
PASS / FAIL
```

Workflow:

```text
.github/
└── workflows/
    └── cypress.yml
```

## Project Structure

```text
sauce-demo-automation/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── api/
│   └── api.cy.js
│
├── cypress/
│   ├── e2e/
│   ├── pages/
│   └── artillery/
│       └── load-test.yml
│
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Go to the project directory:

```bash
cd sauce-demo-automation
```

Install dependencies:

```bash
npm install
```

## Run Cypress

Open Cypress:

```bash
npx cypress open
```

Run all tests:

```bash
npx cypress run
```

## Run API Tests

```bash
npx cypress run --spec "api/api.cy.js"
```

## Run Artillery

```bash
artillery run cypress/artillery/load-test.yml
```

## Project Goal

The goal of this project is to demonstrate practical QA Automation skills:

- UI automation
- API testing
- Page Object Model
- Test assertions
- Test organization
- Performance testing
- Git
- GitHub Actions
- CI/CD