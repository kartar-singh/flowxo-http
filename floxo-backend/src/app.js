require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const axios = require("axios");

const mongoString = 'mongodb://localhost:27017';
mongoose.set('strictQuery', true);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})