const GetBookByIdService = require('../services/GetBookByIdService');

class GetBookByIdController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      const getBookByIdService = new GetBookByIdService();

      const bookById = await getBookByIdService.handle(id);

      res.status(200).json(bookById);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = GetBookByIdController;
