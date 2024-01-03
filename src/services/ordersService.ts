import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const listOrders = async (): Promise<{ type: number; message: Array<Order> }> => {
// todas as orders
  const orders = await OrderModel.findAll();
  // produtos para cada order
  const products = await ProductModel.findAll({
    where: {
      orderId: orders.map((order) => order.getDataValue('id')),
    },
    attributes: ['orderId', 'id'],
  });
  // arrumando no objeto os resultados
  const finalResult: Array<Order> = orders.map((order) => {
    const userId = order.getDataValue('userId');
    const productIds = products
      .filter((product) => product.getDataValue('orderId') === order.getDataValue('id'))
      .map((product) => product.getDataValue('id'));

    return { id: order.getDataValue('id'), userId, productIds };
  });

  return { type: 200, message: finalResult };
};

export default {
  listOrders,
};