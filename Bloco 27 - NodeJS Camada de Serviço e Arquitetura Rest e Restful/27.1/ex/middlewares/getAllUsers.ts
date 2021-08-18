import User from '../models/User';

export const getAllUsers = async (req, res) => {
  const user = new User();

  const users = await user.getAll();

  return res.status(200).json(users);
};
