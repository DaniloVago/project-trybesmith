import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import ordersService from '../../../src/services/ordersService';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('ao usar o get, deve retornas todos os pedidos', async function () {
    // Arrange
    const mockFindAllReturn = ordersMock.getResponse.map((order) =>
      OrderModel.build(order)
    );
    sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);

    // Act
    const serviceResponse = await ordersService.listOrders();

    // Assert
    expect(serviceResponse.type).to.equal(200);
    expect(serviceResponse.message).to.be.deep.equal(ordersMock.getResponse);
  });
});
