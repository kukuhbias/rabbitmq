import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  productName: String,
  price: Number,
  sellerName: String,
});

export const Order = model("Order", orderSchema);
