import { inventoryPage } from '../../support/selectors';
import urls from '../../support/urls';

describe('CartPage: user on cart page and it is empty', { testIsolation: false }, () => {

    before(() => {
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce');

    });

    context('Cart page: when user added item to the cart', () => {
        before(() => {
            cy.addItemToCart('Sauce Labs Backpack');
            cy.get(inventoryPage.cartButton).click();
        })

        it('the item should be displayed', () => {
            cy.verifyItemDisplayed('Sauce Labs Backpack');
        });
    });

    context('Cart page: when user remove item from the cart', () => {
        before(() => {
            cy.verifyItemDisplayed('Sauce Labs Backpack');
            cy.removeItemFromCart('Sauce Labs Backpack');
        })

        it('the item should be removed', () => {
            cy.get('.cart_item').should('not.exist');
        });
    });
});
