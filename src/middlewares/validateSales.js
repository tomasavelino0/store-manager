const { doesProductExist } = require('../services/sales.services');

const validateBodySales = (req, res, next) => {
  const { body } = req;
  const validBodyProduct = body.every((elem) => elem.productId !== undefined);
  const validBodyQuantity = body.every((elem) => elem.quantity !== undefined);
  if (!validBodyProduct) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!validBodyQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  return next();
};

const validateQuantity = (req, res, next) => {
  const { body } = req;
  const validQuantity = body.some((elem) => elem.quantity <= 0);
  if (validQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

const validateProductId = async (req, res, next) => {
  const { body } = req;
  const validProduct = await doesProductExist(body);
  if (!validProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};

module.exports = {
  validateBodySales,
  validateQuantity,
  validateProductId,
};