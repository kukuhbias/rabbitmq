import { Request, Response } from "express";
import orderServices from "../services/order.service";

const orderController = {
  getAllOrders: async (req: Request, res: Response) => {
    try {
      const orders = await orderServices.getAllOrders();
      return res.status(200).json({ data: orders });
    } catch (error) {
      return res.status(500).json({ error: "Unable to fetch error" });
    }
  },
  createOrders: async (req: Request, res: Response) => {
    try {
      const { productName, price, sellerName } = req.body;
      const createOrders = await orderServices.createOrders(
        productName,
        price,
        sellerName
      );
      return res
        .status(201)
        .json({ message: "Thread Successfull created", createOrders });
    } catch (error) {
      return res
        .status(500)
        .json({ error: `Failed to update thread ${error}` });
    }
  },
  deleteOrder: async (req: Request, res: Response) => {
    try {
      const orderId = req.params.id;
      const deleteOrder = await orderServices.deleteOrder(orderId);
      if (deleteOrder?.deletedCount === 0) {
        return res.status(404).json({ message: "error Thread Not Found!" });
      }
      return res
        .status(200)
        .json({ message: "thread success deleted", deleteOrder });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete Order" });
    }
  },
};

export default orderController;
