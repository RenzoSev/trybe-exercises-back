const { Book } = require('../models');

class GetAllBooksService {
  async handle() {
    try {
      const allBooks = await Book.findAll();

      return allBooks;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = GetAllBooksService;
