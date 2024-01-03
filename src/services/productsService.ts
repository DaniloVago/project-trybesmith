import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

const addProducts = async ({ name, price, orderId }: ProductInputtableTypes): 
Promise<{ type: number, message: { id: number, name: string, price: string } }> => {
  const result = await ProductModel.create({ name, price, orderId });
  return { type: 201, message: { id: result.getDataValue('id'), name, price } };
};

const listProducts = async (): Promise<{ type: number; 
  message: Array<{ id: number; name: string; price: string; orderId: number; }> }> => {
  const result = await ProductModel.findAll();

  const mappedResult = result.map((product) => ({
    id: product.getDataValue('id'),
    name: product.getDataValue('name'),
    price: product.getDataValue('price'),
    orderId: product.getDataValue('orderId'),
  }));
  
  return { type: 200, message: mappedResult };
};

export default {
  addProducts,
  listProducts,
};
