const allProducts = [
  {
    id: 1,
    name: 'Martelo do Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const productById = { id: 1, name: 'Martelo do Thor' };

const allProductsMock = { type: null, message: allProducts };

const productByIdMock = { type: null, message: productById };

const updateProduct = {
  id: 1,
  name: 'Martelo do Batman',
};

const updatedProductMock = {
  type: null,
  message: updateProduct
};

const newProductInsert = {
  id: 4,
  name: 'ProdutoX',
};

const newProductMock = {
  type: null,
  message: newProductInsert,
};

module.exports = {
  allProductsMock,
  productByIdMock,
  updatedProductMock,
  newProductMock,
};