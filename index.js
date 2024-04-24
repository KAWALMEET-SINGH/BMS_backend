import express from "express";
import mongoose from "mongoose";
import { connectToDb } from "./DB/connectToDb.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"
import bookRouter from "./routes/books.route.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/book",bookRouter);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({
    success: false,
    statusCode: status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  connectToDb();
  console.log("server started");
});
