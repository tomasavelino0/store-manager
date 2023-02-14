const productsModel = require('../models/products.model');

const listAllProducts = async () => {
  const allProducts = await productsModel.findAllProducts();
  return { type: null, message: allProducts };
};

const doesProductExist = async (id) => {
  const productById = await productsModel.findById(id);
  if (!productById) {
    return { type: 'ID_NAO_ENCONTRADO', message: 'Product not found' };
  }
  return { type: null, message: productById };
};

const insertProduct = async (product) => {
  const productById = await productsModel.insertProduct(product);
  const newProduct = await productsModel.findById(productById);
  if (newProduct) {
    return { type: null, message: newProduct };
  }
  return false;
};

const updateProduct = async (update, id) => {
  const updatedProduct = await productsModel.updateProduct(update, id);
  if (updatedProduct) {
    const listUpdateProduct = await productsModel.findById(id);
    return { type: null, message: listUpdateProduct };
  }
  return { message: 'Product not found' };
};

const deleteProduct = async (id) => {
  const checkId = await productsModel.findById(id);
  await productsModel.deleteProduct(id);
  if (checkId === undefined) {
    return false;
  }
  return true;
};

module.exports = {
  doesProductExist,
  listAllProducts,
  insertProduct,
  updateProduct,
  deleteProduct,
};