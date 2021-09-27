const express = require('express');

const router = express.Router();

const { GetAllPatientsController } = require('../controller/patients');

const getAllPatientsController = new GetAllPatientsController();

router.get('/', getAllPatientsController.handle);

module.exports = router;
