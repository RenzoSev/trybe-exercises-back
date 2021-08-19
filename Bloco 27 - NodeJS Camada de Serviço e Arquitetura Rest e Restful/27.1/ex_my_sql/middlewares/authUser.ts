import { Request, Response, NextFunction } from 'express';
import createUserSchema from '../schemas/createUserSchema';
import UserBody from '../types/UserBody';

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = createUserSchema.validate(req.body as UserBody);

  if (error) return next(error);

  next();
};
