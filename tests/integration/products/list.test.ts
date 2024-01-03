import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('deve mostrar todos os produtos', async function () {
    // Arrange
    const mockFindAllReturn = productsMock.getResponse.map((product) =>
      ProductModel.build(product)
    );
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);

    // Act
    const response = await chai.request(app).get('/products');

    // Assert
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(productsMock.getResponse);
  });
});
