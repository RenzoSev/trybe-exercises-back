const { Book } = require('../models');

class DeleteBookByIdService {
  async handle(id) {
    try {
      const deletedBook = await Book.destroy({
        where: {
          id,
        },
      });

      return deletedBook;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = DeleteBookByIdService;
