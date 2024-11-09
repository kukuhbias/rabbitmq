import orderRepository from "../repositories/order.repository";
import { rabbitmq } from "../utils/rabbitmq";
import {
  orderResult,
  orderSchemaValidator,
} from "../validators/order.validator";

const orderServices = {
  getAllOrders: async () => {
    const orders = await orderRepository.getAllOrders();
    return orders;
  },
  createOrders: async (
    productName: String,
    price: Number,
    sellerName: String
  ): Promise<orderResult> => {
    const createOrders = await orderRepository.createOrders(
      productName,
      price,
      sellerName
    );
    const dataValidation = orderSchemaValidator.safeParse({
      productName,
      price,
      sellerName,
    });
    if (!dataValidation.success) {
      return { error: dataValidation.error.issues };
    }

    const channel = await rabbitmq();
    channel.sendToQueue(
      "orderCreated",
      Buffer.from(JSON.stringify(createOrders))
    );
    console.log(`Message send to Rabbitmq: ${JSON.stringify(createOrders)}`);

    return { data: createOrders };
  },

  deleteOrder: async (orderId: string) => {
    const deleteOrder = await orderRepository.deleteOrder(orderId);
    return deleteOrder;
  },
};

export default orderServices;
