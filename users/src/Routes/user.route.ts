import express from "express";
import userControllers from "../controllers/user.controller";

export const userRouter = express.Router();

//READ
userRouter.get("/", userControllers.getAllUsers);

//CREATE
userRouter.post("/", userControllers.createUser);

//DELETE
userRouter.delete("/delete/:id", userControllers.deleteUser);
