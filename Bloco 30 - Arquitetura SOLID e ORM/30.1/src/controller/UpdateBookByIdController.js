const UpdateBookByIdService = require('../services/UpdateBookByIdService');

class UpdateBookByIdController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      const { author, title, pageQuantity } = req.body;

      const updateBookByIdService = new UpdateBookByIdService();

      const updatedBook = await updateBookByIdService.handle({
        id,
        author,
        title,
        pageQuantity,
      });

      res.status(200).json(updatedBook);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UpdateBookByIdController;
