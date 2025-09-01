import mongoose from "mongoose";

const DB_URL=process.env.MONGODB_URL;
const DB_NAME=process.env.MONGODB_NAME;
async function connectDB() {
    try {
        const connectionINstance=await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectionINstance.connection.host}`);
    }
    catch (error) {
        console.log("error in database connection :",error);
        process.exit(1);
    }
}

export default connectDB;