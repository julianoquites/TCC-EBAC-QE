import { expect, driver } from "@wdio/globals";
import { faker } from "@faker-js/faker";
import homePage from "../pageobjects/home.page.js";
import signupPage from "../pageobjects/signup.page.js";
import productsPage from "../pageobjects/products.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await homePage.openMenu("Profile");

    await signupPage.signup(
      "John",
      "Doe",
      "11999999999",
      faker.internet.email(),
      "senha123",
      "senha123"
    );
    await homePage.openAllProducts();
    await expect(await productsPage.getAllProducts()).toBeDisplayed();
    await driver.pause(10000);
  });
});
