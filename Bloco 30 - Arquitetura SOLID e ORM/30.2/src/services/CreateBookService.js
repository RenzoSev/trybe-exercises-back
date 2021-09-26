const { Book } = require('../models');

class CreateBookService {
  async handle({ title, author, pageQuantity }) {
    const createdBook = await Book.create({ title, author, pageQuantity });

    return createdBook;
  }
}

module.exports = CreateBookService;
