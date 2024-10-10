import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

 const connectDB = async () => {
    return mongoose 
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}

export default connectDB;

