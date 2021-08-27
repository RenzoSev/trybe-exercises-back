const userSchema = require('../schemas/userSchema');

const authUser = async (req, _res, next) => {
  const { username, password } = req.body;

  const { error } = userSchema.validate({ username, password });

  if (error) next(error);

  next();
};

module.exports = authUser;
