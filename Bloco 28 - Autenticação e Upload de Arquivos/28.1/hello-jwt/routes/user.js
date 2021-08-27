const express = require('express');
const rescue = require('express-rescue');
const GetTopSecretController = require('../controllers/GetTopSecretController');

const GetUsernameByTokenController = require('../controllers/GetUsernameByTokenController');
const LoginUserController = require('../controllers/LoginUserController');
const RegisterUserController = require('../controllers/RegisterUserController');

const authAdmin = require('../middlewares/authAdmin');
const authToken = require('../middlewares/authToken');
const authUser = require('../middlewares/authUser');

const router = express.Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();
const getUsernameByTokenController = new GetUsernameByTokenController();
const getTopSecretController = new GetTopSecretController();

router.post('/register', rescue(authUser), registerUserController.handle);

router.post('/login', rescue(authUser), rescue(loginUserController.handle));

router.get('/users/me', rescue(authToken), getUsernameByTokenController.handle);

router.get(
  '/top-secret',
  rescue(authToken),
  rescue(authAdmin),
  getTopSecretController.handle
);

module.exports = router;
