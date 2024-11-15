import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/orders",
  createProxyMiddleware({ target: "http://order-services:8010" })
);

app.use(
  "/users",
  createProxyMiddleware({ target: "http://user-services:8012" })
);

app.listen(3003, () => {
  console.log("server running at port 3003");
});
