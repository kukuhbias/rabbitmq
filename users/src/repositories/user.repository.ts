import { User } from "./models/user.schema";

const userRepository = {
  getAllUsers: async () => {
    const users = await User.find();
    return users;
  },
  createUser: async (username: String, email: String, password: String) => {
    try {
      const isUsernameUsed = await User.findOne({ username });
      const isEmailUsed = await User.findOne({ email });
      if (isUsernameUsed) {
        throw new Error("Username is already Used !");
      }
      if (isEmailUsed) {
        throw new Error("Email is already Used !");
      }
      const newUser = new User({ username, email, password });
      return await newUser.save();
    } catch (error: any) {
      throw new Error(error.message || "Error updating user");
    }
  },
  deleteUser: async (userId: String) => {
    try {
      const deleteUser = await User.deleteOne({ userId });
      return deleteUser;
    } catch (error: any) {
      throw new Error(error.message || "Error deleting User");
    }
  },
};

export default userRepository;
