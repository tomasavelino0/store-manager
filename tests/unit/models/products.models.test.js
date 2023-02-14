const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const mockProducts = require('./mocks/productsMock');
const productsModel = require('../../../src/models/products.model');

describe('teste de unidade do model de products', function () {
  afterEach(sinon.restore);

  it('listando todos produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);
    const result = await productsModel.findAllProducts();
    expect(result).to.be.deep.equal(mockProducts);
  });

  it('busca produto por ID', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProducts[0]]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(mockProducts[0]);
  });
});