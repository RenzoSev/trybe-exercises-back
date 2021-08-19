import Joi from 'joi';

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': `O campo é obrigatório`,
  'string.min': `O campo deve ter, pelo menos, caracteres`,
  'string.email': `Informe um email válido no campo`,
});

export default createUserSchema;
