const express = require('express');

const router = express.Router();

const {
  GetAllPatientsController,
  GetAllPatientsSurgeriesController,
  CreatePatientController,
} = require('../controller/patients');

const getAllPatientsController = new GetAllPatientsController();
const getAllPatientsSurgeriesController =
  new GetAllPatientsSurgeriesController();
const createPatientController = new CreatePatientController();

router.get('/', getAllPatientsController.handle);

router.get('/surgeries', getAllPatientsSurgeriesController.handle);

router.post('/create', createPatientController.handle);

module.exports = router;
