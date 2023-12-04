import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express"
const app=express();
async function  connectDB(){
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("app not able to communicate with database")
        throw error
       })
        
    } catch (error) {
        console.log("DATABASE ERROR",error)
        throw error
        
    }


}


app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})

