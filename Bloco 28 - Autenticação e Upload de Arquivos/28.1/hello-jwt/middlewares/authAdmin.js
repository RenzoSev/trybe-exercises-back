const authAdmin = async (req, _res, next) => {
  try {
    const { admin } = req.decode;

    if (!admin) {
      const error = {
        statusCode: 403,
        message: 'Restricted access',
      };

      throw error;
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authAdmin;
