import { NextFunction, Request, Response } from "express";
import { env } from "../utils/env";

export async function middlewareCheckOrigin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.headers.host);

  if (req.headers.host === `${env.ORDERS_SERVICE_HOST}:3003`) {
    return next();
  }
  console.log(req.headers.host);
  return res.status(403).send("You are nut allowed to send direct request");
}
