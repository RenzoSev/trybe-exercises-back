const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const moviesCollection = await connection().then((db) =>
    db.collection('movies')
  );

  const movies = await moviesCollection.find().toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection().then((db) =>
    db.collection('movies')
  );

  const { insertedId: id } = await moviesCollection.insertOne({
    title,
    directedBy,
    releaseYear,
  });

  return {
    id,
  };
};

const getById = async (id) => {
  const moviesCollection = await connection().then((db) =>
    db.collection('movies')
  );

  const movieById = await moviesCollection.findOne(new ObjectId(id));

  return movieById;
};

module.exports = {
  create,
  getAll,
  getById,
};
