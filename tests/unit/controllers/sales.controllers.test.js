const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const salesServices = require('../../../src/services/sales.services');
const salesControllers = require('../../../src/controllers/sales.controllers');

const { allSalesMock, listSaleByIdMock, saleByIdMock } = require('./mocks/salesControllerMocks');

describe('teste de unidade da camada de controllers de /sales', function () {
  it('Verifica se possivel listar todas vendas', async function () {
    const res = {};
    const req = { body: {} };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'listAllSales').resolves(allSalesMock)
    await salesControllers.listAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesMock.message);
  });

  it('lista uma venda com sucesso', async function () {
    const res = {};
    const req = { body: {} };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'insertSale').resolves(listSaleByIdMock)
    await salesControllers.listSale(req, res)

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(listSaleByIdMock.message);
  });

  it('lista uma venda pelo ID com sucesso', async function () {
    const res = {};
    const req = { params: {id: 4} };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'listSaleByid').resolves(saleByIdMock);
    await salesControllers.listSaleById(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleByIdMock.message);
  });
});