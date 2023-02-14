const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const saleServices = require('../../../src/services/sales.services');
const { findByIdMock, insertedSaledMock, saleMock } = require('./mocks/salesMock');
 
describe('testes de unidade da cadada service de /sales', function () {
  afterEach(sinon.restore)

  it('Verifica se ao inserir uma venda, retorna a venda com o ID e os items vendidos', async function () {
    const idDb = 1;
    
    sinon.stub(salesModel, 'saleIdDb').resolves(idDb);
    sinon.stub(salesModel, 'findSaleById').resolves(findByIdMock);
    const result = await saleServices.insertSale(saleMock)

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(insertedSaledMock);    
  })

  it('Verifica se e possivel cadastrar uma venda com produto valido', async function () {
    sinon.stub(salesModel, 'findSaleById').resolves(findByIdMock)
    const result = await saleServices.doesProductExist(saleMock);

    expect(result).to.be.equal(true);
  });

  it('Verifica se e possivel cadastrar uma venda com um produto inexistente', async function () {
    const saleInvalid = [
  {
    productId: 5,
    quantity: 5
  },
  {
    productId: 2,
    quantity: 10
  }
];
    sinon.stub(salesModel, 'findSaleById').resolves(findByIdMock)
    const result = await saleServices.doesProductExist(saleInvalid);

    expect(result).to.be.equal(false);
  });

});
