const express = require('express');
const ProductModel = require('../models/ProductModel');

const router = express.Router();

const productModel = new ProductModel();

router.get('/', async (req, res, _next) => {
  const products = await productModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, _next) => {
  const product = await productModel.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await productModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await productModel.exclude(req.params.id);

  res.status(204).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await productModel.update(req.params.id, name, brand);

  res.status(204).json(products);
});

module.exports = router;
