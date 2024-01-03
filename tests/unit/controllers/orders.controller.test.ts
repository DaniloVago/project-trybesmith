import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ordersController from '../../../src/controllers/ordersController';
import ordersMock from '../../mocks/orders.mock';
import ordersService from '../../../src/services/ordersService';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('ao realizar o GET, deve retornar todos os pedidos', async function () {
    // Arrange
    sinon.stub(ordersService, 'listOrders').resolves(ordersMock.serviceResponseGet);
    // Act
    await ordersController.listOrders(req, res);
    
    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(ordersMock.getResponse);
  });

});
