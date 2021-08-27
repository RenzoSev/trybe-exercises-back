class GetTopSecretController {
  async handle(_req, res) {
    const secretInfo = 'Peter Parker é o Homem-Aranha';

    res.status(200).json({ secretInfo });
  }
}

module.exports = GetTopSecretController;
