require('dotenv').config();

const express = require('express');

const CreateBookController = require('./controller/CreateBookController');
const GetAllBooksController = require('./controller/GetAllBooksController');
const GetBookByIdController = require('./controller/GetBookByIdController');

const app = express();

const PORT = process.env.PORT || 3000;

const createBookController = new CreateBookController();
const getAllBooksController = new GetAllBooksController();
const getBookByIdController = new GetBookByIdController();

app.use(express.json());

app.get('/books', getAllBooksController.handle);

app.get('/book/:id', getBookByIdController.handle);

app.post('/book', createBookController.handle);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
