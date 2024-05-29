import mongoose from "mongoose";

export const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI environment variable is not defined");
    }
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
        dbName: "pms",
    });

    console.log(`Database Connected On ${connection.host}`);
};