class GetUsernameByToken {
  async handle(req, res) {
    const { admin, username } = req.decode;

    res.status(200).json({ admin, username });
  }
}

module.exports = GetUsernameByToken;
