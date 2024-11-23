/// <reference types="cypress" />

export const accountPage = {
  getUserInfo() {
    return cy.get(
      ".woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)"
    );
  },
  accessOrdersPage() {
    cy.get(".woocommerce-MyAccount-navigation-link--orders > a").click();
  },
  accessAddressPage() {
    cy.get(".woocommerce-MyAccount-navigation-link--edit-address > a").click();
  },
  accessAccDetailsPage() {
cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
  },
  getEmail() {
    return cy.get("#account_email");
  },
  saveChangesBtn() {
    cy.get(".woocommerce-Button").click();
  },
  getSavedMsg() {
    return cy.get('.woocommerce-message')
  },
  editAdressBtn() {
    cy.get(":nth-child(1) > .title > .edit").click();
  },
  getPostCode() {
    return cy.get("#billing_postcode");
  },
  postCodeErrorMsg() {
    return cy.get(".woocommerce-error > li");
  },
  saveAddressBtn() {
    cy.get(".button").click();
  },
  getOrderNumber() {
    return cy
      .get(".woocommerce-orders-table__cell-order-number > a")
      .invoke("text")
      .then((orderNumber) => {
        return orderNumber.trim();
      });
  },

  visualizeOrder() {
    cy.get(".woocommerce-orders-table__cell-order-actions").click();
  },

  getPageTitle() {
    return cy.get(".page-title");
  },
  logout() {
    cy.get(
      ".woocommerce-MyAccount-navigation-link--customer-logout > a"
    ).click();
  },
};
