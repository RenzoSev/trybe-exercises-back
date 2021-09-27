const express = require('express');

const router = express.Router();

const {
  GetAllPatientsController,
  GetAllPatientsSurgeriesController,
} = require('../controller/patients');

const getAllPatientsController = new GetAllPatientsController();
const getAllPatientsSurgeriesController =
  new GetAllPatientsSurgeriesController();

router.get('/', getAllPatientsController.handle);

router.get('/surgeries', getAllPatientsSurgeriesController.handle);

module.exports = router;
