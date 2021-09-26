const GetAllBooksService = require('../services/GetAllBooksService');

class GetAllBooksController {
  async handle(_req, res) {
    try {
      const getAllBooksService = new GetAllBooksService();

      const allBooks = await getAllBooksService.handle();

      res.status(200).json(allBooks);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = GetAllBooksController;
