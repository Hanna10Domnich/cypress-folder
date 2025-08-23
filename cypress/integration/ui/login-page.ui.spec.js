import { loginPage } from '../../support/selectors';

describe('LoginPage: login page opened', { testIsolation: false }, () => {

    context('LoginPage: user should review the page', () => {

        it('LoginPage: user should see username field', () => {
            cy.visit('/');
            cy.get(loginPage.usernameInput).should('be.visible');
            cy.get(loginPage.usernameInput)
                .should('have.attr', 'placeholder')
                .and('eq', 'Username');
        });

        it('LoginPage: user should see password field', () => {
            cy.get(loginPage.passwordInput).should('be.visible');
            cy.get(loginPage.passwordInput)
                .should('have.attr', 'placeholder')
                .and('eq', 'Password');
        });

        it('LoginPage: user should see login button', () => {
            cy.get(loginPage.loginButton)
                .should('be.visible')
                .and('be.enabled')
                .and('have.attr', 'value', 'Login');
        });
    });

    context('LoginPage: user should see error on invalid credentials', () => {

        it('LoginPage: user should see error message for invalid credentials', () => {
            cy.login('invalid_user', 'invalid_password');
            cy.get(loginPage.errorMessage).should('be.visible');
            cy.get(loginPage.errorMessage).should('contain.text', 'Username and password do not match');
        });
    });

    context('LoginPage: user shoudld login with valid credentials', () => {

        it('LoginPage: user should login and see inventory page', () => {
            cy.login('standard_user', 'secret_sauce');
            cy.url().should('include', '/inventory');
        });
    });
});
