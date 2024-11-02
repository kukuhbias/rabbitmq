import { Order } from "./models/order.schema";

const orderRepository = {
  getAllOrders: async () => {
    const orders = await Order.find();
    return orders;
  },

  createOrders: async (
    productName: String,
    price: Number,
    sellerName: String
  ) => {
    const newOrder = new Order({
      productName,
      price,
      sellerName,
    });

    return await newOrder.save();
  },

  deleteOrder: async (threadId: string) => {
    const deleteOrder = await Order.deleteOne({ _id: threadId });
    return deleteOrder;
  },
};

export default orderRepository;
