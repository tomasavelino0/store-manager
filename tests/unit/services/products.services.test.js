//npm run test:mocha
const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.service');
const {mockProducts, insertProductMock} = require('./mocks/productsMock');

describe('teste de unitade de services de products', function () {
  afterEach(sinon.restore)

  it('listagem de todos produtos em caso de sucesso', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(mockProducts);
    const result = await productsServices.listAllProducts();
    expect(result.type).to.equal(null);
    expect(result.message).to.be.deep.equal(mockProducts);
  });

  it('busca um produto por ID COM sucesso', async function () {
    const productById = { id: 1, name: 'Martelo de Thor' };
    sinon.stub(productsModel, 'findById').resolves(productById)
    const result = await productsServices.doesProductExist(1);
    expect(result.type).to.equal(null);
    expect(result.message).to.be.deep.equal(productById);
  });

  it('busca um produto por ID SEM sucesso', async function () {
    const errorIdNotFound = 'ID_NAO_ENCONTRADO';
    const messageError = 'Product not found';
    const result = await productsServices.doesProductExist(9999);
    expect(result.type).to.be.deep.equal(errorIdNotFound);
    expect(result.message).to.equal(messageError);
  });

  it('insere um novo produto ao BD com sucesso', async function () {
    const newProduct = {
    id: 4,
    name: 'ProdutoX',
  };
    
    sinon.stub(productsModel, 'findById').resolves(newProduct);
    const result = await productsServices.insertProduct(newProduct);

    expect(result.message).to.be.deep.equal(insertProductMock.message);
  });
});