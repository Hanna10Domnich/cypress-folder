import { inventoryPage } from '../../support/selectors';

describe('InventoryPage: navigation and UI checks', { testIsolation: false }, () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory');
    });

    context('InventoryPage: navigation menu', () => {
        it('should display the menu button', () => {
            cy.get(inventoryPage.menuButton).should('be.visible');
        });
        it('should open the menu and show navigation links', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get(inventoryPage.inventoryLink).should('be.visible');
            cy.get(inventoryPage.aboutLink).should('be.visible');
            cy.get(inventoryPage.logoutLink).should('be.visible');
            cy.get(inventoryPage.resetAppStateLink).should('be.visible');
        });

        it('should logout and return to login page', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get(inventoryPage.logoutLink).click();
            cy.url().should('include', '/');
        });
        it('should reset app state from menu', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get(inventoryPage.resetAppStateLink).click();
        });
        it('should close the menu when clicking the close button', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get(inventoryPage.closeMenuButton).should('be.visible').click();
            cy.get(inventoryPage.menuPanel).should('not.be.visible');
        });
        it('should keep menu open when clicking inside the menu', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get(inventoryPage.menuPanel).should('be.visible');
            cy.get(inventoryPage.menuPanel).click('center');
            cy.get(inventoryPage.menuPanel).should('be.visible');
        });
        it('should close the menu when clicking outside the menu', () => {
            cy.get(inventoryPage.menuButton).click();
            cy.get('body').click(0, 0); // Click outside the menu
            cy.get(inventoryPage.menuPanel).should('not.be.visible');
        });
    });

    context('InventoryPage: filtering', () => {
        it('should filter products A to Z', () => {
            cy.get(inventoryPage.filterDropdown).select('Name (A to Z)');
            // Optionally check that the first product is the expected one
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Backpack');
        });
        it('should filter products Z to A', () => {
            cy.get(inventoryPage.filterDropdown).select('Name (Z to A)');
            cy.get(inventoryPage.inventoryItems).first().should('not.contain.text', 'Sauce Labs Backpack');
        });
        it('should filter products by Price low to high', () => {
            cy.get(inventoryPage.filterDropdown).select('Price (low to high)');
            // Optionally check that the first product is the lowest price
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Onesie');
        });
        it('should filter products by Price high to low', () => {
            cy.get(inventoryPage.filterDropdown).select('Price (high to low)');
            // Optionally check that the first product is the highest price
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Fleece Jacket');
        });
    });
});
