const express = require('express');

const router = express.Router();

const saleController = require('../controllers/sales.controllers');
const { validateId } = require('../middlewares/validationsProducts');

const {
  validateBodySales,
  validateQuantity,
  validateProductId,
} = require('../middlewares/validateSales');

router.post('/',
  validateBodySales,
  validateQuantity,
  validateProductId,
  saleController.listSale);

router.get('/',
  saleController.listAllSales);

router.get('/:id',
validateId,
saleController.listSaleById);

module.exports = router;