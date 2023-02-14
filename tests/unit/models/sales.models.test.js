const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');
const { listSaleMock, insertSaleMock, listAllSalesMock } = require('./mocks/salesMock');

describe('teste de unidade da camada model de /sales', function () {
  afterEach(sinon.restore);
  
  it('Verifica se e possivel listar uma venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([listSaleMock]);
    sinon.stub(salesModel, 'findSaleById').resolves(listSaleMock);
    const result = await salesModel.findSaleById(1);
    expect(result).to.be.deep.equal(listSaleMock);
  });
  it('Verifica se e possivel cadastrar uma venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([insertSaleMock]);

    const result = await salesModel.insertSale(1, 1, 10);
    expect(result).to.be.equal(true);
  });

  it('lista todas vendas com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([listAllSalesMock]);
    const result = await salesModel.listAllSalesDb();

    expect(result).to.be.deep.equal(listAllSalesMock);
  });
});