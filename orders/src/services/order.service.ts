import orderRepository from "../repositories/order.repository";
import { rabbitmq } from "../utils/rabbitmq";

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
    const channel = await rabbitmq();
    channel.sendToQueue(
      "orderCreated",
      Buffer.from(JSON.stringify(createOrders))
    );
    console.log(`Message send to Rabbitmq: ${JSON.stringify(createOrders)}`);

    return createOrders;
  },

  deleteOrder: async (orderId: string) => {
    const deleteOrder = await orderRepository.deleteOrder(orderId);
    return deleteOrder;
  },
};

export default orderServices;
