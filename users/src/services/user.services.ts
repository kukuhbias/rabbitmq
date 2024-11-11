import userRepository from "../repositories/user.repository";
import { userSchemaValidator } from "../validators/user.validator";

const userServices = {
  getAllUsers: async () => {
    try {
      const users = await userRepository.getAllUsers();
      return users;
    } catch (error) {}
  },
  createUser: async (username: String, email: String, password: String) => {
    try {
      const createUser = await userRepository.createUser(
        username,
        email,
        password
      );
      const dataValidation = userSchemaValidator.safeParse({
        username,
        email,
        password,
      });
      if (!dataValidation.success) {
        throw new Error("Format is not valid");
      }
      //RABBITMQ
      return createUser;
    } catch (error: any) {
      throw new Error(error.message || "Error creating User");
    }
  },
  deleteUser: async (userId: string, authKey: string | undefined) => {
    try {
      if (authKey !== "secret123") {
        throw new Error("Unauthorized");
      }
      const deleteUser = await userRepository.deleteUser(userId);
      return deleteUser;
    } catch (error: any) {
      throw new Error(error.message || "Error deleting User");
    }
  },
};

export default userServices;
