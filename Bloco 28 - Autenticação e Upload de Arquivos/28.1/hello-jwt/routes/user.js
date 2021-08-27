const express = require('express');
const rescue = require('express-rescue');

const GetUsernameByTokenController = require('../controllers/GetUsernameByTokenController');
const LoginUserController = require('../controllers/LoginUserController');
const RegisterUserController = require('../controllers/RegisterUserController');

const authToken = require('../middlewares/authToken');
const authUser = require('../middlewares/authUser');

const router = express.Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();
const getUsernameByTokenController = new GetUsernameByTokenController();

router.post('/register', rescue(authUser), registerUserController.handle);

router.post('/login', rescue(authUser), rescue(loginUserController.handle));

router.get('/users/me', rescue(authToken), getUsernameByTokenController.handle);

router.get('/top-secret', rescue(authToken), () => console.log('oi'));

module.exports = router;
