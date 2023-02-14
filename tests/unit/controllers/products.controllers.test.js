const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/products.service');
const productsControllers = require('../../../src/controllers/products.controller');
const { allProductsMock, productByIdMock, updatedProductMock, newProductMock } = require('./mocks/productsController.mock')

const errorMessage = 'Product not found';

describe('testa de unidade de productsController', function () {
  afterEach(sinon.restore)

  it('Listando todos os produtos com sucesso', async function () {
    const res = {};
    const req = { body: {} };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'listAllProducts').resolves(allProductsMock);
    await productsControllers.listAllProducts(req,res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsMock.message);
  });

  it('listando um produto por ID com sucesso', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    }
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'doesProductExist').resolves(productByIdMock)
    await productsControllers.listProductById(req,res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productByIdMock.message);
  });

  it('listando um produto por ID sem sucesso', async function () {
    const res = {};
    const req = {
      params: { id: 999 },
    }
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns();
    await productsControllers.listProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: errorMessage });
  });

  it('executa um update no BD com sucesso', async function () {
    const res = {};
    const req = {
      body: {
        name: 'Martelo do Batman'
      },
      params: { id: 1 },
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'updateProduct').resolves(updatedProductMock)
    await productsControllers.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedProductMock.message)
  });
 
  it('insere um novo produto no DB com sucesso', async function () {
    const res = {};
    const req = {
      body: {
        name: 'ProdutoX',
      }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'insertProduct').resolves(newProductMock)
    await productsControllers.postProduct(req, res)

    expect(res.status).to.have.been.calledWith(201)
    expect(res.json).to.have.been.calledWith(newProductMock.message)
  });
});