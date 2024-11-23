const request = require("supertest");
const baseUrl = "http://lojaebac.ebaconline.art.br";

describe("Catálogo de Produtos", () => {
  let token;

  beforeAll(async () => {
    const res = await request(baseUrl)
      .post("/public/authUser")
      .send({ email: "juliano@ebac.com.br", senha: "Senha123456!" });

    token = res.body.token;
  });

  it("Produtos devem estar visíveis", async () => {
    const res = await request(baseUrl)
      .get("/public/getProducts")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.products.length).toBeGreaterThan(0);
  });

});
