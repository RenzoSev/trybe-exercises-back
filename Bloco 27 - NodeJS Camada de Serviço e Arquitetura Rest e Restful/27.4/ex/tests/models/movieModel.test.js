const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer, getUri } = require('mongodb-memory-server');

const MoviesModel = require('../../models/movieModel');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', async () => {
    const DBServer = await MongoMemoryServer().create();

    before(async () => {
      const URLMock = getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.empty;
    });
  });

  describe('quando existem filmes criados', async () => {
    const DBServer = await MongoMemoryServer().create();

    before(async () => {
      const URLMock = getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      const moviesCollection = await connectionMock
        .db('model_example')
        .collection('movies');

      await moviesCollection.insertOne({
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MoviesModel.getAll();

      expect(item).to.include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy'
      );
    });
  });
});

describe('Insere um novo filme no BD', async () => {
  const DBServer = await MongoMemoryServer().create();

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  const URLMock = await DBServer.getUri();

  const connectionMock = await MongoClient.connect(URLMock, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  before(async () => {
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Busca um filme pelo ID', async () => {
  const DBServer = await MongoMemoryServer().create();

  const URLMock = getUri();

  const connectionMock = await MongoClient.connect(URLMock, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const payloadMovieById = {
    _id: ObjectId(ID_EXAMPLE),
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  before(async () => {
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('Quando retorna um filme com sucesso', () => {
    before(async () => {
      const moviesCollection = await connectionMock
        .db('model_example')
        .collection('movies');

      await moviesCollection.insertOne({ payloadMovieById });
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById();

      expect(response).to.be.a('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear", e "directedBy"', async () => {
      const response = await MoviesModel.getById(ID_EXAMPLE);

      expect(response).to.include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy'
      );
    });
  });

  describe('Quando não retorna um filme com sucesso', () => {
    it('retorna null', async () => {
      const response = await MoviesModel.getById(ID_EXAMPLE);

      expect(response).to.be.equal(null);
    });
  });
});
