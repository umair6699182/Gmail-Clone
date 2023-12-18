import mongoose from "mongoose";



const Connection = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL );
        console.log("Database Connected SuccessFully")
    } catch (error) {
        console.log("Database Connected Error", error)
    }
};


export default Connection;