import Joi from 'joi';

const CepSchema = Joi.object({
  cep: Joi.string().not().empty().required().length(9),
  logradouro: Joi.string().not().empty().required().min(2),
  bairro: Joi.string().not().empty().required().min(2),
  localidade: Joi.string().not().empty().required().min(4),
  uf: Joi.string().not().empty().required().length(2),
});

export default CepSchema;
