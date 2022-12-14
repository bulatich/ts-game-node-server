import express from 'express';
import {connect} from './db.js';
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Init access to .env config file
dotenv.config();

const app = express()
const port = process.env.PORT || 9091

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

app.get('/java_questions', (req, res) => {
    connect().then(async () => {
       const result = await mongoose.connection.db.collection('question').find({ type: 'Java', correctAnswer: {$exists: true} }).toArray();
       res.send(result)
    })
});