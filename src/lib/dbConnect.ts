import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Checking if db is already connected
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }
  //   If not already connected
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    console.log(db);
    console.log(db.connections);
    connection.isConnected = db.connections[0].readyState;

    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed");
    process.exit(1);
  }
}

export default dbConnect;
