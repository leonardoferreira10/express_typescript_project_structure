const Joi = require('joi');

export async function validateEmail(email: string) {
  const schema = Joi.string().email().required();
  const { error } = await schema.validate(email);
  return error ? error.details : null;
}
