import { Request, Response } from 'express';

import User from '../models/User';

export const getAllUsers = async (req: Request, res: Response) => {
  const user = new User();

  const users = await user.getAll();

  return res.status(200).json(users);
};
