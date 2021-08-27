const connection = require('./connection');

class RegisterUserModel {
  async handle({ username, password }) {
    const query =
      'INSERT INTO hello_jwt.user (username, password) VALUES (?, ?)';

    const literals = [username, password];

    const [registeredUser] = await connection.execute(query, literals);

    return registeredUser;
  }
}

module.exports = RegisterUserModel;
