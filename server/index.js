import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import listingRouter from './routes/listing.route.js'
import path from 'path';
dotenv.config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();



const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});

// here we will create API route
app.use('/server/user', userRouter);
app.use('/server/auth', authRouter);
app.use('/server/listing', listingRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

// here we will create middleware

app.use((err, req, res, next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
