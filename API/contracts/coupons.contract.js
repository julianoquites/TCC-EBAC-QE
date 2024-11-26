const Joi = require("joi");

const couponSchema = Joi.object({
  id: Joi.number().positive().required(),
  code: Joi.string().trim().min(3).max(50).required(),
  amount: Joi.string()
    .pattern(/^\d+(\.\d{1,2})?$/)
    .required(),
  discount_type: Joi.string()
    .valid("fixed_cart", "percent", "fixed_product")
    .required(),
  description: Joi.string().max(255).optional(),
  date_created: Joi.string().isoDate().optional(),
  date_modified: Joi.string().isoDate().optional(),
  usage_count: Joi.number().min(0).optional(),
}).options({ stripUnknown: true });

const couponsListSchema = Joi.array().items(couponSchema);

function validateCoupon(coupon) {
  return couponSchema.validate(coupon);
}

function validateCouponsList(couponsList) {
  return couponsListSchema.validate(couponsList);
}

module.exports = {
  couponSchema,
  couponsListSchema,
  validateCoupon,
  validateCouponsList,
};
