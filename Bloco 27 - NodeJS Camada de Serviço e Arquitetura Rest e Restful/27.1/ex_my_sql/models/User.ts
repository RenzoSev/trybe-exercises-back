import UserBody from '../types/UserBody';
import connection from './connection';

class User {
  user: UserBody;

  constructor(user?: UserBody) {
    const emptyUser = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
    };

    const fixUser = user || emptyUser;

    const { email, first_name, last_name, password } = fixUser;

    this.user = {
      email,
      first_name,
      last_name,
      password,
    };
  }

  formated(user: UserBody) {
    const { first_name, last_name, password, email } = user;

    return {
      firstName: first_name,
      lastName: last_name,
      password,
      email,
    };
  }

  isValid() {
    const { first_name, last_name, email, password } = this.user;

    const userInfos = [first_name, last_name, email, password];

    if (userInfos.map((info) => !info).includes(true)) {
      return { error: true, message: 'Campos inválidos' };
    }

    const PASSWORD_REGEX = /[a-z0-9]{6, }/gi;

    if (PASSWORD_REGEX.test(password)) {
      return {
        error: true,
        message: 'O campo "password" deve ter pelo menos 6 caracteres',
      };
    }

    return { error: false };
  }

  async createUser() {
    const { first_name, last_name, email, password } = this.user;

    const query = `INSERT INTO users_crud.users (first_name, last_name, email, password)
      VALUES (?, ?, ?, ?)`;

    const queryLastId = 'SELECT LAST_INSERT_ID FROM users';

    const literals = [first_name, last_name, email, password];

    await connection.execute(query, literals);

    const id = await connection.execute(queryLastId);

    const formatedUser = this.formated(this.user);

    return { id, ...formatedUser };
  }

  async getAll() {
    const query = 'SELECT * FROM users';

    const users = await connection.execute(query);

    const formatedUsers = users.map((user) => this.formated(user));

    return formatedUsers;
  }

  async getById(id: string) {
    const db = await connection();

    if (!ObjectId.isValid(id)) return false;

    const userById = await db.collection('users').findOne(new ObjectId(id));

    if (!userById) return false;

    return userById;
  }

  async changeById(id: string) {
    const db = await connection();

    if (!ObjectId.isValid(id)) return false;

    const userId = new ObjectId(id);

    const formatedUser = this.formated(this.user);

    const { value } = await db
      .collection('users')
      .findOneAndUpdate(
        { _id: userId },
        { $set: formatedUser },
        { returnDocument: 'after' }
      );

    if (!value) return false;

    return formatedUser;
  }
}

export default User;
