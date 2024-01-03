import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/productsService';
import productsController from '../../../src/controllers/productsController';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('ao receber um productBody, retorna o produto criado no banco e type 201', async function () {
    // Arrange
    req.body = productsMock.validProductBody;
    sinon.stub(productsService, 'addProducts').resolves(productsMock.serviceResponse);
    
    // Act
    await productsController.addProducts(req, res);
    
    // Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productsMock.returnRes);
  });

  it('ao realizar o GET, deve retornar todos os objetos', async function () {
    // Arrange
    sinon.stub(productsService, 'listProducts').resolves(productsMock.serviceResponseGet);
    // Act
    await productsController.listProducts(req, res);
    
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.getResponse);
  });
});