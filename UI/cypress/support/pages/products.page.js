/// <reference types="cypress" />

export const productsPage = {
  selectAllProducts() {
    return cy.get(".products.products-grid .row > .grid.product.type-product");
  },
  selectSearchBar() {
    return cy.get(
      ".search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search"
    );
  },
  pressSearchBtn() {
    cy.get(
      ".search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search"
    ).click();
  },
  getNoResultsMessage() {
    return cy.get(".woocommerce-info");
  },
};
