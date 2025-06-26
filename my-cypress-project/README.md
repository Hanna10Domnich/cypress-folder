# My Cypress Project

This project is a sample Cypress testing setup that demonstrates how to write and organize tests for a web application.

## Project Structure

```
my-cypress-project
├── cypress
│   ├── integration
│   │   └── sample_spec.js      # Sample test specifications
│   ├── fixtures
│   │   └── example.json        # Sample data for tests
│   └── support
│       ├── commands.js         # Custom commands for tests
│       └── index.js            # Global configurations and behaviors
├── cypress.json                # Cypress configuration file
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/my-cypress-project.git
   cd my-cypress-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run Cypress:**
   ```
   npx cypress open
   ```

## Usage Guidelines

- Place your test specifications in the `cypress/integration` directory.
- Use the `cypress/fixtures` directory to store any mock data needed for your tests.
- Define any custom commands in `cypress/support/commands.js`.
- Configure global settings in `cypress/support/index.js`.

## Running Tests

You can run your tests using the Cypress Test Runner or headlessly via the command line:

- **Open Cypress Test Runner:**
  ```
  npx cypress open
  ```

- **Run tests in headless mode:**
  ```
  npx cypress run
  ```

- **Run tests in debug mode (with Chrome DevTools):**
  ```
  npx cypress open --browser chrome
  ```
  Then select a spec and use Chrome DevTools for debugging.

## Documentation

- [Git Strategy](docs/git-strategy.md)
- [VS Code Hotkeys](docs/hotkeys.md)

## Additional Information

For more information on Cypress, visit the [Cypress documentation](https://docs.cypress.io).