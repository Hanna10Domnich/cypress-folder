const { inventoryPage } = require("./selectors");

const urls = {
    baseUrl: 'https://www.saucedemo.com/',
    inventory: 'https://www.saucedemo.com/inventory.html',
    cart: 'https://www.saucedemo.com/cart.html',
};

module.exports = urls;

//Example
//import urls from '../support/urls';
// cy.visit(urls.baseUrl);
