import {
    myAccountMenuItemsField,
    myAccountMenuItemsList
} from '../../fields/myAccountMenu';

/**
 * Utility function to assert repective auth user exists
 * 
 * @param {String} firstName auth user name
 * @param {String} myAccountPage respective my account page to navigate
 */
export const assertCreateAccount = (firstName) => {
    // Enter username into the username field
    cy.get(myAccountMenuItemsField).contains('Hi, ' + firstName);
};

/**
 * Utility function to navigate to my account pages
 * 
 * @param {String} firstName auth user name
 * @param {String} myAccountPage respective my account page to navigate
 */
export const goToMyAccount = (firstName, myAccountPage) => {
    // exapnd my account menu
    cy.get(myAccountMenuItemsField).contains(firstName).click();

    // click on my account page
    cy.get(myAccountMenuItemsList).contains(myAccountPage).click();
};