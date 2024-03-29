const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(5).not().empty().required(),
  password: Joi.string().min(5).not().empty().required(),
});

module.exports = userSchema;
