import express, { Response } from "express";
import * as orderRepositories from "./repositories/order.repositories";
import { mongoConnect } from "./utils/mongoose";
import { rabbitmq } from "./utils/rabbitmq";

const app = express();
app.use(express.json());
mongoConnect();

app.get("/", async (_, res) => {
  const orders = await orderRepositories.getAllOrders();
  return res.json({ data: orders });
});

app.post("/", async (req, res) => {
  const { productName, price, sellerName } = req.body;

  const newOrder = await orderRepositories.createOrders(
    productName,
    price,
    sellerName
  );

  //product message => send to Rabbitmq / Message broker
  const channel = await rabbitmq();
  channel.sendToQueue("orderCreated", Buffer.from(JSON.stringify(newOrder)));
  console.log(`Message send to Rabbitmq: ${JSON.stringify(newOrder)}`);

  return res.status(201).json({ data: newOrder });
});

app.listen(8010, () => {
  console.log("Order services running at port 8010");
});
