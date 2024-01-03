import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ordersMock from '../../mocks/orders.mock';
import OrderModel from '../../../src/database/models/order.model'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('deve mostrar todos os pedidos', async function () {
    // Arrange
    const mockFindAllReturn = ordersMock.getResponse.map((order) =>
      OrderModel.build(order)
    );
    sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);

    // Act
    const response = await chai.request(app).get('/orders');

    // Assert
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(ordersMock.getResponse);
  });
});
