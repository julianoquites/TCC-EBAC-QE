import { homePage } from "../pages/home.page"
import { loginPage } from '../pages/login.page'

Cypress.Commands.add('login', (email, senha) => {
    cy.visit("/");
    homePage.openSignupPage();
    loginPage.login(email, senha)
})
