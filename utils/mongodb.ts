import mongoose from "mongoose";

let isConnected = false

export const connectToDatabase = async () => {

    mongoose.set("strictQuery", true)

    if (!process.env.MONGO_URI) return console.log("MongoDB URI is missing")

    if (isConnected) {
        return console.log("Already Connected to Database")
    } else {
        try {
            await mongoose.connect(process.env.MONGO_URI)
            isConnected = true
        } catch (error) {
            console.log(error)
        }
    }
}
