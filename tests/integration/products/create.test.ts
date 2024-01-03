import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao receber um productBody, retorna o produto criado no banco', async function () {
    // Arrange
    const requestBody = productsMock.validProductBody;
    const mockFindOneReturn = ProductModel.build(productsMock.existingProduct);
    sinon.stub(ProductModel, 'create').resolves(mockFindOneReturn);

    // Act
    const response = await chai.request(app).post('/products').send(requestBody);

    // Assert
    expect(response.status).to.equal(201);
    expect(response.body).to.be.deep.equal(productsMock.returnRes);
  });
});
