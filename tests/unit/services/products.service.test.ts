import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/productsService';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('ao receber um productBody, retorna o produto criado no banco', async function () {
    // Arrange
    const requestBody = productsMock.validProductBody;
    const mockFindOneReturn = ProductModel.build(productsMock.existingProduct);
    sinon.stub(ProductModel, 'create').resolves(mockFindOneReturn);

    // Act
    const serviceResponse = await productsService.addProducts(requestBody);

    // Assert
    expect(serviceResponse.type).to.equal(201);
    expect(serviceResponse.message).to.be.deep.equal(productsMock.returnRes);
  });

  it('ao usar o get, deve retornas todos os produtos', async function () {
    // Arrange
    const mockFindAllReturn = productsMock.getResponse.map((product) =>
      ProductModel.build(product)
    );
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);

    // Act
    const serviceResponse = await productsService.listProducts();

    // Assert
    expect(serviceResponse.type).to.equal(200);
    expect(serviceResponse.message).to.be.deep.equal(productsMock.getResponse);
  });
});
