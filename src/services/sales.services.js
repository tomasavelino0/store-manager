const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');

const insertSale = async (sales) => {
  const saleId = await salesModel.saleIdDb();
  await Promise.all(sales.map(async (sale) => {
    const insertedSale = await salesModel.insertSale(saleId, sale.productId, sale.quantity);
    return insertedSale;
  }));
  const newSale = await salesModel.findSaleById(saleId);
    return { type: null, message: { id: saleId, itemsSold: newSale } };
};

const doesProductExist = async (sales) => {
  const productsExist = await Promise.all(
    sales.map(async (sale) => {
      const product = await productsModel.findById(sale.productId);
      return product;
    }),
  ).then((products) => products.every((product) => product));
  return productsExist;
};

const listAllSales = async () => {
  const allSales = await salesModel.listAllSalesDb();
  if (allSales) {
    return { type: null, message: allSales };
  }
  return false;
};

const listSaleByid = async (id) => {
  const saleById = await salesModel.listSaleById(id);
  if (saleById.length > 0) {
    return { type: null, message: saleById };
  }
    return { message: 'Sale not found' };
};

module.exports = {
  insertSale,
  doesProductExist,
  listAllSales,
  listSaleByid,
};