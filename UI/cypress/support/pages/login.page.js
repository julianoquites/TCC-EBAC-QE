/// <reference types="cypress" />

class LoginPage {
    get #email() { return cy.get("#username");}
    get #password() { return cy.get("#password");}
    get #btnLogin() { return cy.get(".woocommerce-form > .button");}

    login(email, password){
        this.#email.type(email)
        this.#password.type(password)
        this.#btnLogin.click()
    }
}

export const loginPage = new LoginPage();