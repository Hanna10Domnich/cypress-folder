import { inventoryPage } from '../../support/selectors';

describe('InventoryPage: navigation and UI checks', { testIsolation: false }, () => {
    before(() => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory');
    });

    context('InventoryPage: navigation menu', () => {
        it('should display the menu button', () => {
            cy.get(inventoryPage.menuButton).should('be.visible');
        });
    });

    context('InventoryPage: filtering', () => {
        it('should filter products A to Z', () => {
            cy.get(inventoryPage.filterDropdown).select('Name (A to Z)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Backpack');
        });
        it('should filter products Z to A', () => {
            cy.get(inventoryPage.filterDropdown).select('Name (Z to A)');
            cy.get(inventoryPage.inventoryItems).first().should('not.contain.text', 'Sauce Labs Backpack');
        });
        it('should filter products by Price low to high', () => {
            cy.get(inventoryPage.filterDropdown).select('Price (low to high)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Onesie');
        });
        it('should filter products by Price high to low', () => {
            cy.get(inventoryPage.filterDropdown).select('Price (high to low)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Fleece Jacket');
        });
    });

    context('InventoryPage: menu links check: all items, logout', () => {
        it('should open the menu and show all menu links', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get(inventoryPage.inventoryLink).should('be.visible');
            cy.get(inventoryPage.aboutLink).should('be.visible');
            cy.get(inventoryPage.logoutLink).should('be.visible');
            cy.get(inventoryPage.resetAppStateLink).should('be.visible');
        });
        it('should navigate to All Items (Inventory) page from menu', () => {
            cy.get(inventoryPage.inventoryLink).click();
            cy.url().should('include', '/inventory');
        });
        it('should logout and return to login page', () => {
            cy.get(inventoryPage.logoutLink).click();
            cy.url().should('include', '/');
        });
    });
});
