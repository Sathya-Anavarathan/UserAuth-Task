import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';



dotenv.config();

const PORT=process.env.PORT ;
const connectDB = async () => {
    const MONGODBURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@userauthorization1.guckrwt.mongodb.net/${process.env.DB_NAME}?appName=UserAuthorization1`;
    try {
        await mongoose.connect(MONGODBURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log("connection error", error);
    }
};
export default connectDB;