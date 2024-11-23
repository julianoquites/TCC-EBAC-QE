/// <reference types="cypress" />

const { email, senha } = require("../fixtures/data.json");
import { homePage } from "../support/pages/home.page";
import { productsPage } from "../support/pages/products.page";
import { accountPage } from "../support/pages/account.page";

describe("Catálogo de Produtos", () => {
  beforeEach(() => {
    cy.login(email, senha);
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

  it("Pesquisar por 'jack' deve retornar todos os produtos com 'jack' no nome", () => {
    homePage.openSeeAllProducts();
    productsPage.selectSearchBar().type("jack");
    productsPage.pressSearchBtn();
    productsPage
      .selectAllProducts()
      .its("length")
      .then((length) => {
        expect(length).to.be.greaterThan(0);
      });
  });
});

describe("Painel Minha Conta", () => {
  beforeEach(() => {
    cy.login(email, senha);
  });

  it("Painel Minha Conta deve conter nome de usuário correto", () => {
    accountPage.getUserInfo().should("contain", "juliano_quites");
  });

  it("Usuário consegue deslogar corretamente", () => {
    accountPage.logout();
    homePage.signupBtnMessage().should("have.text", " Sign up ");
  });
});

describe("Meus Pedidos", () => {
  beforeEach(() => {
    cy.login(email, senha);
  });

  it("Acessar a opção Pedidos deve redirecionar para a página de Pedidos", () => {
    accountPage.accessOrdersPage();
    accountPage.getPageTitle().should("have.text", "Pedidos");
  });

  it("Número do pedido no painel Pedidos deve ser igual em Visualizar", () => {
    accountPage.accessOrdersPage();

    accountPage.getOrderNumber().then((orderNumber) => {
      cy.wrap(orderNumber).as("firstNumber");
      accountPage.visualizeOrder();

      accountPage
        .getPageTitle()
        .invoke("text")
        .then((title) => {
          const cleanTitle = title.replace("Pedido ", "").trim();
          cy.get("@firstNumber").then((savedNumber) => {
            expect(cleanTitle).to.equal(savedNumber);
          });
        });
    });
  });
});

describe("Endereços", () => {
  beforeEach(() => {
    cy.login(email, senha);
  });

  it("Tentar cadastrar um endereço com CEP inválido e mostrar mensagem de erro", () => {
    accountPage.accessAddressPage();
    accountPage.editAdressBtn();
    accountPage.getPostCode().clear().type("1234567");
    accountPage.saveAddressBtn();
    accountPage.postCodeErrorMsg().should("be.visible");
  });

  it("Tentar cadastrar um endereço com CEP válido e não mostrar mensagem de erro", () => {
    accountPage.accessAddressPage();
    accountPage.editAdressBtn();
    accountPage.getPostCode().clear().type("12345678");
    accountPage.saveAddressBtn();
    accountPage.postCodeErrorMsg().should("not.exist");
  });
});

describe("Detalhes da Conta", () => {
  beforeEach(() => {
    cy.login(email, senha);
  });

  it("Cadastrar um e-mail com formato válido e mostrar mensagem de sucesso", () => {
    accountPage.accessAccDetailsPage();
    accountPage.getEmail().clear().type("juliano@ebac.com.br");
    accountPage.saveChangesBtn();
    accountPage.getSavedMsg().should("be.visible");
  });

  it("Tentar cadastrar um e-mail com formato inválido e não mostrar mensagem de sucesso", () => {
    accountPage.accessAccDetailsPage();
    accountPage.getEmail().clear().type("juliano.ebac.com");
    accountPage.saveChangesBtn();
    accountPage.getSavedMsg().should("not.exist");
  });
});
