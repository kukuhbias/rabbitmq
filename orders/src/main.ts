import express from "express";
import { mongoConnect } from "./utils/mongoose";
import { OrderRouter } from "./routes/order.route";

const app = express();
app.use(express.json());
mongoConnect();

app.use("/", OrderRouter);

app.listen(8010, () => {
  console.log("Order services running at port 8010");
});
