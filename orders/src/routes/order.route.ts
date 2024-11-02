import express from "express";
import orderController from "../controllers/order.controller";

export const OrderRouter = express.Router();

//READ
OrderRouter.get("/", orderController.getAllOrders);

// CREATE
OrderRouter.post("/", orderController.createOrders);
