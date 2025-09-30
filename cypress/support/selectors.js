const loginPage = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
    menuButton: '#react-burger-menu-btn',
    logoutLink: '#logout_sidebar_link',
};

const inventoryPage = {
    menuButton: '#react-burger-menu-btn',
    closeMenuButton: '#react-burger-cross-btn',
    menuPanel: '.bm-menu-wrap',
    inventoryLink: '#inventory_sidebar_link',
    aboutLink: '#about_sidebar_link',
    logoutLink: '#logout_sidebar_link',
    resetAppStateLink: '#reset_sidebar_link',
    filterDropdown: '.product_sort_container',
    inventoryItems: '.inventory_item',
    cartButton: '[data-test="shopping-cart-link"]',
};

const cartPage = {


};

export { loginPage, inventoryPage, cartPage };
