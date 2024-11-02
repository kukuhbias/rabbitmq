import mongoose from "mongoose";

export async function mongoConnect() {
  return await mongoose
    .connect("mongodb://mongo-notifications:27017/notifications")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}
