// require("dotenv").config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Err:", error);
      throw error;
    });

    app.listen(8001, () => {
      console.log(`Sever started at http://localhost:8001`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed: ", err);
  });
