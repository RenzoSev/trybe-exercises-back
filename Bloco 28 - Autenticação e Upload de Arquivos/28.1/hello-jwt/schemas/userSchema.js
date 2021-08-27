const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(5),
  password: Joi.string().min(5),
});

module.exports = userSchema;
