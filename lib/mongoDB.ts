
import mongoose from "mongoose";

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
  console.log("Trying to connect to MongoDB...");

  if (mongoose.connection.readyState == 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Leila_Store"
    });
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
