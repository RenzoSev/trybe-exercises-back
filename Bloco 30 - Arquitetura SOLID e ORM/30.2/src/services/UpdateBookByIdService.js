const { Book } = require('../models');

class UpdateBookByIdService {
  async handle({ id, author, title, pageQuantity }) {
    try {
      const updatedBook = await Book.update(
        { author, title, pageQuantity },
        {
          where: {
            id,
          },
        }
      );

      return updatedBook;
    } catch (error) {
      console.error();
    }
  }
}

module.exports = UpdateBookByIdService;
