import orderRepository from "../repositories/order.repository";

const orderServices = {
  getAllOrders: async () => {
    const orders = await orderRepository.getAllOrders();
    return orders;
  },
  createOrders: async (
    productName: String,
    price: Number,
    sellerName: String
  ) => {
    const createOrders = await orderRepository.createOrders(
      productName,
      price,
      sellerName
    );
    return createOrders;
  },

  deleteOrder: async (orderId: string) => {
    const deleteOrder = await orderRepository.deleteOrder(orderId);
    return deleteOrder;
  },
};

export default orderServices;
