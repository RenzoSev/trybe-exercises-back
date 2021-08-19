import express from 'express';
import AuthCepController from '../controllers/AuthCepController.js';

const router = express.Router();

const authCep = new AuthCepController();

router.get('/:cep', authCep.handle);

export default router;
