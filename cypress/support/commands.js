import { loginPage } from './selectors';
import { itemNameToId } from './test-data/item-mappings';

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

Cypress.Commands.add('addItemToCart', (itemName) => {
    const itemId = itemNameToId[itemName];
    if (!itemId) throw new Error(`Unknown item name: ${itemName}`);
    cy.get(`[data-test="add-to-cart-${itemId}"]`).click();
});

Cypress.Commands.add('removeItemFromCart', (itemName) => {
    const itemId = itemNameToId[itemName];
    if (!itemId) throw new Error(`Unknown item name: ${itemName}`);
    cy.get(`[data-test="remove-${itemId}"]`).click();
});

// Cypress.Commands.add('verifyItemDisplayed', () => {
//     cy.get(`[data-test="inventory-item"]`).should('be.visible');
// });


Cypress.Commands.add('verifyItemDisplayed', (itemName) => {
    cy.get('[data-test="inventory-item-name"]')
        .contains(itemName)
        .should('be.visible');
});
