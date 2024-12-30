import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    // Ensure MONGO_URI exists
    if (!ENV_VARS.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI, {
      useNewUrlParser: true, // Handle MongoDB connection string deprecations
      useUnifiedTopology: true, // Opt-in to new connection management engine
    });

    // Log success message
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log and handle errors
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};
