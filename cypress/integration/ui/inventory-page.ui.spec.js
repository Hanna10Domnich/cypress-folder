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

    context('InventoryPage: when I as a user click on filter products A to Z', () => {

        it('Sauce Labs Backpack should be on first place ', () => {
            cy.get(inventoryPage.filterDropdown).select('Name (A to Z)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Backpack');
        });
    });

    context('InventoryPage: when I as a user click on filter products Z to A', () => {

        it('Test.allTheThings() T-Shirt (Red) should be on the first place', () => {
            cy.get(inventoryPage.filterDropdown).select('Name (Z to A)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
        });
    });

    context('InventoryPage: when I as a user click on filter products by price low to high', () => {

        it('should be the first product Sauce Labs Onesie', () => {
            cy.get(inventoryPage.filterDropdown).select('Price (low to high)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Onesie');
        });
    });

    context('InventoryPage: when I as a user click on filter products by price high to low', () => {

        it('should be the first product Sauce Labs Fleece Jacket', () => {
            cy.get(inventoryPage.filterDropdown).select('Price (high to low)');
            cy.get(inventoryPage.inventoryItems).first().should('contain.text', 'Sauce Labs Fleece Jacket');
        });
    });

    context('InventoryPage: when I as a user click on menu', () => {

        before(() => {
            cy.get(inventoryPage.menuButton).click();
        });

        it('should be about link visible', () => {
            cy.get(inventoryPage.aboutLink).should('be.visible');
        });

        it('should be all items link visible', () => {
            cy.get(inventoryPage.inventoryLink).should('be.visible');
        });

        it('should be logout link visible', () => {
            cy.get(inventoryPage.logoutLink).should('be.visible');
        });

        it('should be reset app state link visible', () => {
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
