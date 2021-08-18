import User from '../models/User';

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = new User();

  const userById = await user.getById(id);

  return res.status(200).json(userById);
};
