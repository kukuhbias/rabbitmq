import { Notification } from "./models/notification.schema";

export async function getAllNotification() {
  return await Notification.find();
}

export async function createNotification(
  productName: String,
  price: Number,
  sellerName: String
) {
  const newNotification = new Notification({ productName, price, sellerName });
  return await newNotification.save();
}
