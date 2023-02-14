const camelize = require('camelize');
const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result);
};

const findById = async (idProduct) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ', [idProduct],
  );
  return camelize(result);
};

const insertProduct = async (product) => {
  const { name } = product;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const updateProduct = async (update, id) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE products
     SET name = ?
     WHERE id = ?`, [update, id],
  );
  return affectedRows > 0;
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?;', [id],
  );
};
module.exports = {
  findAllProducts,
  findById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
