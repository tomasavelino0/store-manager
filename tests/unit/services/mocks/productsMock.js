const mockProducts = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const newProduct = {
  id: 4,
  name: 'ProdutoX',
};

const insertProductMock = {type: null, message: newProduct}

module.exports = {
  mockProducts,
  insertProductMock,
};