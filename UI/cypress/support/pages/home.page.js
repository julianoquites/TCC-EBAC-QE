/// <reference types="cypress" />

export const homePage = {

  openSignupPage() {
    return cy.get(".icon-user-unfollow").click();
  },
  openSeeAllProducts() {
    cy.get("#primary-menu > .menu-item-629 > a").click();
  },
  products() {
    return cy.get('[data-testid="see-all-product-list"]');
  },
  selectProduct() {
      cy.get(
        ':nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]'
      ).click({ force: true, multiple: true });
  },
  addProduct() {
    cy.get('[data-testid="addToCart"]').click();
  },
  removeProduct() {
    cy.get('[data-testid="remove"]').click();
  },
  updateProduct() {
    cy.get('[data-testid="addItem"]').click();
  },
}