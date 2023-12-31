import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//  data - form , json-form , url , file(multer)

// fetching json data
app.use(
  express.json({
    limit: "16kb",
  })
);

// config- for url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// extended -- for nesting objects

// file/folders
app.use(express.static("public"));

// parsing cookie 
app.use(cookieParser()) 

export default app;
