const request = require("supertest");
const { faker } = require("@faker-js/faker");
const {
  couponSchema,
  couponsListSchema,
} = require("../contracts/coupons.contract");
const baseUrl = "http://lojaebac.ebaconline.art.br";
const basicAuthToken = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy";

describe("API de Cupons", () => {
  describe("GET /wc/v3/coupons", () => {
    it("Deve listar todos os cupons cadastrados", async () => {
      const res = await request(baseUrl)
        .get("/wp-json/wc/v3/coupons")
        .set("Authorization", basicAuthToken);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);

      const { error } = couponsListSchema.validate(res.body);
      expect(error).toBeUndefined();
    });

    it("Deve buscar um cupom por ID", async () => {
      const couponId = 4834;
      const res = await request(baseUrl)
        .get(`/wp-json/wc/v3/coupons/${couponId}`)
        .set("Authorization", basicAuthToken);

      expect(res.status).toBe(200);
      expect(res.body.id).toBe(couponId);

      const { error } = couponSchema.validate(res.body);
      expect(error).toBeUndefined();
    });
  });

  describe("POST /wc/v3/coupons", () => {
    it("Deve cadastrar um novo cupom", async () => {
      let desconto = faker.number.int({ min: 10, max: 100 }).toString();
      const newCoupon = {
        code: `Ganhe${desconto}`,
        amount: `${desconto}.00`,
        discount_type: "fixed_product",
        description: `Cupom de teste com desconto de ${desconto}%`,
      };

      const res = await request(baseUrl)
        .post("/wp-json/wc/v3/coupons")
        .set("Authorization", basicAuthToken)
        .send(newCoupon);

      expect(res.status).toBe(201);
      expect(res.body.code.toLowerCase()).toBe(newCoupon.code.toLowerCase());

      const { error } = couponSchema.validate(res.body);
      expect(error).toBeUndefined();
    });

    it("Não deve permitir duplicidade de código de cupom", async () => {
      const duplicateCoupon = {
        code: "Ganhe10",
        amount: "10.00",
        discount_type: "fixed_product",
        description: "Cupom duplicado",
      };

      const res = await request(baseUrl)
        .post("/wp-json/wc/v3/coupons")
        .set("Authorization", basicAuthToken)
        .send(duplicateCoupon);

      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/O código de cupom já existe/i);
    });
  });
});
