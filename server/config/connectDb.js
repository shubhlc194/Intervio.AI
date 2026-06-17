import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database error:", error);
    process.exit(1);
  }
};

export default connectDb;