import express from "express";
import { mongoConnect } from "./utils/mongoose";
import { OrderRouter } from "./routes/order.route";
import { middlewareCheckOrigin } from "./middlewares/middleware.check-origin";

const app = express();
app.use(express.json());
mongoConnect();

app.use(middlewareCheckOrigin);

app.use("/", OrderRouter);

app.listen(8010, () => {
  console.log("Order services running at port 8010");
});
