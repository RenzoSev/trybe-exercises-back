import Joi from 'joi';

import { Request, Response, NextFunction } from 'express';
import rescue, {
  Request as RequestRescue,
  Response as ResponseRescue,
} from 'express-rescue';

import User from '../models/User';

import UserBody from '../types/UserBody';

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo {{: id="label"}} é obrigatório',
  'string.min':
    'O campo {{: id="label" deve ter, pelo menos, {{: id="limit"}} caracteres}}',
  'string.email': 'Informe um email válido no cmapo {{: id="label}}',
});

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = createUserSchema.validate(req.body as UserBody);

  if (error) return next(error);

  next();
};

export const createUser = rescue(
  async (req: RequestRescue, res: ResponseRescue) => {
    const { first_name, last_name, email, password } = req.body as UserBody;

    const userBody = { first_name, last_name, email, password };

    const user = new User(userBody);

    const { message, error } = user.isValid();

    if (error) {
      res.status(401).json({ error, message });
    }

    const formatedUser = await user.createUser();

    res.status(201).json(formatedUser);
  }
);
