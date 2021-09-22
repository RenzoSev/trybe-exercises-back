const DeleteBookByIdService = require('../services/DeleteBookByIdService');

class DeleteBookByIdController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      const deleteBookByIdService = new DeleteBookByIdService();

      const deletedBook = await deleteBookByIdService.handle(id);

      res.status(200).json(deletedBook);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = DeleteBookByIdController;
