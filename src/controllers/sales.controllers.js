const salesService = require('../services/sales.services');

const listSale = async (req, res) => {
  const { body } = req;
  const sale = await salesService.insertSale(body);
  if (sale.type === null) {
    return res.status(201).json(sale.message);
  }
};

const listAllSales = async (_req, res) => {
  const allSales = await salesService.listAllSales();
  if (allSales.type === null) {
    return res.status(200).json(allSales.message);
  }
};

const listSaleById = async (req, res) => {
  const { id } = req.params;
  const saleById = await salesService.listSaleByid(Number(id));
  if (saleById.type === null) {
    return res.status(200).json(saleById.message);
  }
  return res.status(404).json({ message: saleById.message });
};

module.exports = {
  listSale,
  listAllSales,
  listSaleById,
};