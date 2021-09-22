const CreateBookService = require('../services/CreateBookService');

class CreateBookController {
  async handle(req, res) {
    try {
      const { title, author, pageQuantity = 0 } = req.body;

      const createBookService = new CreateBookService();

      const createdBook = await createBookService.handle({
        title,
        author,
        pageQuantity,
      });

      res.status(201).json(createdBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ops! =(' });
    }
  }
}

module.exports = CreateBookController;
