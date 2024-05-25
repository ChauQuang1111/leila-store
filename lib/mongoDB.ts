
import mongoose from "mongoose";

let isConnected: boolean = false;


export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
  console.log("Trying to connect to MongoDB...");

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Leila_Store"
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
