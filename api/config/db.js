import mongoose from "mongoose";

const connect = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URL);
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
    console.log("connected to database");
  } catch (error) {
    console.log("Database connection error", error);
  }
};

export default connect;
