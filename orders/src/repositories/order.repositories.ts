import { Order } from "./models/order.schema";

export async function getAllOrders() {
  const orders = await Order.find();
  return orders;
}

export async function createOrders(
  productName: String,
  price: Number,
  sellerName: String
) {
  const newOrder = new Order({
    productName,
    price,
    sellerName,
  });

  return await newOrder.save();
}
