const productServices = require('../services/products.service');

const listAllProducts = async (_req, res) => {
  const { message } = await productServices.listAllProducts();
  return res.status(200).json(message);
};

const listProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.doesProductExist(Number(id));
  if (type) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(message);
};

const postProduct = async (req, res) => {
  const { body } = req;
  const { type, message } = await productServices.insertProduct(body);
  if (!type) {
    return res.status(201).json(message);
  }
  return res.status(400).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = await productServices.updateProduct(name, Number(id));
  if (product.type === null) {
    return res.status(200).json(product.message);
  }
  return res.status(404).json({ message: product.message });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productServices.deleteProduct(Number(id));
  if (!deletedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).end();
};

module.exports = {
  listAllProducts,
  listProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};