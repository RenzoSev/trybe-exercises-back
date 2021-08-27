const express = require('express');
const rescue = require('express-rescue');

const LoginUserController = require('../controllers/LoginUserController');
const RegisterUserController = require('../controllers/RegisterUserController');

const authUser = require('../middlewares/authUser');

const router = express.Router();

const registerUserController = new RegisterUserController();
const loginUserController = new LoginUserController();

router.post('/register', rescue(authUser), registerUserController.handle);

router.post('/login', rescue(authUser), rescue(loginUserController.handle));

module.exports = router;
