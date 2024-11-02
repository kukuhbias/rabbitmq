import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  prodctName: String,
  price: Number,
  sellerName: String,
});

export const Notification = model("Notification", notificationSchema);
