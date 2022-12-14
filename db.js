import mongoose from "mongoose";
import dotenv from 'dotenv';
// Init access to .env config file
dotenv.config();

const DB_QUERY_STRING = `mongodb://battler:${process.env.DB_PASS}@178.250.158.114:27017/battler`;

export async function connect() {
    await mongoose.connect(DB_QUERY_STRING);
}
