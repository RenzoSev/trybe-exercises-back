import express from 'express';

import AuthCepBodyController from '../controllers/AuthCepBodyController.js';
import AuthCepParamsController from '../controllers/AuthCepParamsController.js';
import CreateCepController from '../controllers/CreateCepController.js';
import GetByCepController from '../controllers/GetByCepController.js';

import errorMiddleware from '../middlewares/error.js';

const router = express.Router();

const authCepBodyController = new AuthCepBodyController();
const authCepParamsController = new AuthCepParamsController();
const createCepController = new CreateCepController();
const getByCepController = new GetByCepController();

router.post('/', authCepBodyController.handle, createCepController.handle);

router.get('/:cep', authCepParamsController.handle, getByCepController.handle);

router.use(errorMiddleware);

export default router;
