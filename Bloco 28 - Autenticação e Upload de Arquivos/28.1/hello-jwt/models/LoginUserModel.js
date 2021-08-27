const connection = require('./connection');

class LoginUserModel {
  async handle({ username, password }) {
    const query = 'SELECT * FROM user WHERE username=? AND password=?';

    const literals = [username, password];

    const [user] = await connection.execute(query, literals);

    if (!user[0]) return null;

    return user[0];
  }
}

module.exports = LoginUserModel;
