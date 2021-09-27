const express = require('express');

const router = express.Router();

const { GetAllPlansWithPatientsController } = require('../controller/plans');

const getAllPlansWithPatientsController =
  new GetAllPlansWithPatientsController();

router.get('/:id', getAllPlansWithPatientsController.handle);

module.exports = router;
