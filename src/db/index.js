import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const password=encodeURIComponent("Engineering@123")
const MONGODB_URI=`mongodb+srv://kopilakhadka122:${password}@cluster0.iztmart.mongodb.net/`





const connectDB=async ()=>{


    try {
        
        const connectionInstance=await mongoose.connect(`${MONGODB_URI}}/${DB_NAME}`)
        console.log(`\n Mongodb Connected !! DB HOST : ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error)
        process.exit(1)
        
    }
}



export default connectDB;