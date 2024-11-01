import mongoose from "mongoose";

const url = 'mongodb+srv://pspkssm7:Prince123@cluster0.08rri.mongodb.net/';

export default async function dbconnection() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
