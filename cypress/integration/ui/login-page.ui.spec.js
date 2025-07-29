import selectors from '../../support/selectors';
const { loginPage } = selectors;

describe('LoginPage: Given Login page opened', { testIsolation: false }, () => {
    before(() => {
        cy.visit('/');
    });

    context('LoginPage: user should review the page', () => {

        it('LoginPage: user should see Username field', () => {
            cy.get(loginPage.usernameInput).should('be.visible');
        });

        it('LoginPage: user should see Password field', () => {
            cy.get(loginPage.passwordInput).should('be.visible');
        });

        it('LoginPage: user should see Login button', () => {
            cy.get(loginPage.loginButton).should('be.visible').and('be.enabled');
        });
    });

    context('LoginPage: user shoudld login with valid credentials', () => {
        it('LoginPage: user should login and see inventory page', () => {
            cy.get(loginPage.usernameInput).type('standard_user');
            cy.get(loginPage.passwordInput).type('secret_sauce');
            cy.get(loginPage.loginButton).click();
            cy.url().should('include', '/inventory');
            // Logout after successful login
            cy.get(loginPage.menuButton).click();
            cy.get(loginPage.logoutLink).click();
            cy.url().should('include', '/');
        });
    });

    context('LoginPage: user should see error on invalid credentials', () => {
        it('LoginPage: user should see error message for invalid credentials', () => {
            cy.get(loginPage.usernameInput).type('invalid_user');
            cy.get(loginPage.passwordInput).type('invalid_password');
            cy.get(loginPage.loginButton).click();
            cy.get(loginPage.errorMessage).should('be.visible');
            cy.get(loginPage.errorMessage).should('contain.text', 'Username and password do not match');
        });
    });
});
