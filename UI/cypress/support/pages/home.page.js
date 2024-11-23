/// <reference types="cypress" />

export const homePage = {
  openSignupPage() {
    return cy.get(".icon-user-unfollow").click();
  },
  openSeeAllProducts() {
    cy.get("#primary-menu > .menu-item-629 > a").click();
  },
  signupBtnMessage() {
    return cy.get(
      ".topbar-inner > :nth-child(1) > .list-inline > :nth-child(1) > a"
    );
  },
};
