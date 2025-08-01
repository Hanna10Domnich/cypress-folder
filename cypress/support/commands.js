import { loginPage } from './selectors';

Cypress.Commands.add('getUserDataByRole', (role) => {
    if (!Object.values(userRoles).includes(role)) {
        throw new Error(`Invalid user: ${role}`);
    }

    const user = Cypress.env(`${role}-data`);
    if (user) {
        cy.log(`User found in environment for role: ${role}`);
        return cy.wrap(user);
    }

    return cy.fixture(`../sensitive-data/${Cypress.env('envName')}-users.json`).then((users) => {
        const userData = users[role];
        if (!userData) {
            throw new Error(`User data not found for role: ${role}`);
        }
        Cypress.env(`${role}-data`, userData);
        return cy.wrap(userData);
    });
});

Cypress.Commands.add('login', (username, password) => {
    cy.get(loginPage.usernameInput).clear().type(username);
    cy.get(loginPage.passwordInput).clear().type(password);
    cy.then(() => {
        cy.get(loginPage.loginButton).click();
    });
});
