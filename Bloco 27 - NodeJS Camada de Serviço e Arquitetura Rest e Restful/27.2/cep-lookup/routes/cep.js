import express from 'express';

import AuthCepBodyController from '../controllers/AuthCepBodyController.js';
import AuthCepParamsController from '../controllers/AuthCepParamsController.js';
import GetByCepController from '../controllers/GetByCepController.js';

import errorMiddleware from '../middlewares/error.js';

const router = express.Router();

const authCepBody = new AuthCepBodyController();

const authCepParams = new AuthCepParamsController();
const getByCepController = new GetByCepController();

router.post('/', authCepBody.handle);

router.get('/:cep', authCepParams.handle, getByCepController.handle);

router.use(errorMiddleware);

export default router;
