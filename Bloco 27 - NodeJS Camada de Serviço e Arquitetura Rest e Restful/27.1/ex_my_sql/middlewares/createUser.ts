import rescue, { Request, Response } from 'express-rescue';

import User from '../models/User';

import UserBody from '../types/UserBody';

export const createUser = rescue(async (req: Request, res: Response) => {
  const { first_name, last_name, email, password } = req.body as UserBody;

  const userBody = { first_name, last_name, email, password };

  const user = new User(userBody);

  const { message, error } = user.isValid();

  if (error) {
    res.status(401).json({ error, message });
  }

  const formatedUser = await user.createUser();

  res.status(201).json(formatedUser);
});
