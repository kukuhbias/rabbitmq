import express from "express";
import { mongoConnect } from "./utils/mongoose";
import { userRouter } from "./Routes/user.route";
import { middlewareCheckOrigin } from "./middlewares/middleware.check-origin";

const app = express();

app.use(express.json());
mongoConnect();

app.use(middlewareCheckOrigin);
app.use("/", userRouter);

app.listen(8012, () => {
  console.log("User services running at port 8012");
});
