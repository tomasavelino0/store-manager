const express = require('express');
const productController = require('../controllers/products.controller');
const {
  validateId,
  validateBodyPost,
   } = require('../middlewares/validationsProducts');

const router = express.Router();

router.get('/',
  productController.listAllProducts);

router.get('/:id',
  validateId,
  productController.listProductById);

router.post('/',
  validateBodyPost,
  productController.postProduct);

router.put('/:id',
  validateId,
  validateBodyPost,
  productController.updateProduct);

router.delete('/:id',
  validateId,
  productController.deleteProduct);

module.exports = router;