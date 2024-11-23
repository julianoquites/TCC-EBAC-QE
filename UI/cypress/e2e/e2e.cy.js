/// <reference types="cypress" />

const { email, senha } = require("../fixtures/data.json");
import { homePage } from "../support/pages/home.page"; // Importando de forma consistente
import { productsPage } from "../support/pages/products.page";

describe("Teste de Autenticação", () => {
  beforeEach(() => {
    cy.login(email, senha);
    cy.visit("/");
  });

  it("Produtos devem estar visíveis", () => {
    homePage.openSeeAllProducts();
    productsPage
      .selectAllProducts()
      .its("length")
      .then((length) => {
        expect(length).to.be.greaterThan(0);
      });
  });

  it("Pesquisar por '111' deve retornar 0 resultados", () => {
    homePage.openSeeAllProducts();
    productsPage.selectSearchBar().type("111");
    productsPage.pressSearchBtn();
    productsPage.getNoResultsMessage().should("be.visible");
  });
});
