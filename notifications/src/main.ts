import express from "express";
import { consumeOrderCreateEvents } from "./utils/rabbitmq";
import { mongoConnect } from "./utils/mongoose";

const app = express();
consumeOrderCreateEvents();
mongoConnect();

app.get("/", async (_, res) => {
  return res.send("Notification services running!");
});

app.listen(8011, () => {
  console.log("Notification servces running at port 8011");
});
