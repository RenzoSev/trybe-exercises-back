import { MongoClient, MongoClientOptions, Db } from 'mongodb';

const OPTIONS: MongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const DB = 'user_example';

let db: null | Db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db(DB);
        return db;
      });
};

export default connection;
