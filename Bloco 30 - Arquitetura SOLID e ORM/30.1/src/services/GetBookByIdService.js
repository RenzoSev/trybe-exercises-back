const { Book } = require('../models');

class GetBookByIdService {
  async handle(id) {
    try {
      const bookById = await Book.findByPk(id);

      return bookById
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = GetBookByIdService;
