const camelize = require('camelize');
const connection = require('./connection');

const saleIdDb = async () => {
   const [{ insertId }] = await connection.execute(
    'INSERT INTO sales () VALUES()',
   );
  return insertId;
};

const insertSale = async (saleId, productId, quantity) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return affectedRows > 0;
};

const findSaleById = async (idSale) => {
  const [result] = await connection.execute(
    'SELECT product_id, quantity FROM sales_products WHERE sale_id = ? ', [idSale],
  );
   return camelize(result);
};

const listAllSalesDb = async () => {
  const [result] = await connection.execute(
    `SELECT sa.id AS sale_id, sa.date, sp.product_id, sp.quantity
     FROM sales AS sa
     INNER JOIN sales_products AS sp
     ON sa.id = sp.sale_id
     ORDER BY sa.id, product_id ASC;`,  
  );
  return camelize(result);
};

const listSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sa.date, sp.product_id, sp.quantity
     FROM sales AS sa
     INNER JOIN sales_products AS sp
     ON sa.id = sp.sale_id
     WHERE sa.id = ?
     ORDER BY sa.id`, [id],
  );
  return camelize(result);
};

module.exports = {
  findSaleById,
  saleIdDb,
  insertSale,
  listAllSalesDb,
  listSaleById,
};