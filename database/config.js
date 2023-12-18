import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const Connection = async ()=>{
    const URL = `mongodb+srv://${process.env.User}:${process.env.Password}@gmail-clone.lk1yc4u.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log("Database Connected SuccessFully")
    } catch (error) {
        console.log("Database Connected Error", error)
    }
};


export default Connection;