const express = require('express');
const db = require('./db.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

// Init access to .env config file
dotenv.config();

const app = express()
app.use(cors())
const port = process.env.PORT || 9091

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

app.get('/java_questions', (req, res) => {
    db.connect().then(async () => {
       const result = await mongoose.connection.db.collection('question').find({ type: 'Java', correctAnswer: {$exists: true} }).toArray();
       res.send(result)
    })
});