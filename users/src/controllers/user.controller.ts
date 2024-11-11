import { Request, Response } from "express";
import userServices from "../services/user.services";

const userControllers = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const user = await userServices.getAllUsers();
      return res.status(200).json({ data: user });
    } catch (error) {
      return res.status(500).json({ error: "Unable to fetch error" });
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const createUser = await userServices.createUser(
        username,
        email,
        password
      );
      return res
        .status(201)
        .json({ message: "Success creating Username", data: createUser });
    } catch (error: any) {
      if (error.message === "Username is already Used !") {
        return res
          .status(400)
          .json({ message: `Failed create User format is invalid !` });
      }
      return res.status(500).json({ message: `Failed create User : ${error}` });
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const authKey = req.headers.authorization;
      const deleteUser = await userServices.deleteUser(userId, authKey);
      return res
        .status(201)
        .json({ message: "user successfull deleted", data: deleteUser });
    } catch (error: any) {
      if (error.message === "Unauthorized") {
        return res.status(404).json({ message: `You are not Authorized` });
      }

      return res
        .status(500)
        .json({ message: `Failed to delete User ${error}` });
    }
  },
};

export default userControllers;
