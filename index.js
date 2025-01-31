const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const port = 3010;

// MongoDB connection
const mongoDB = process.env.DB_URI; // replace with your MongoDB URI

// Async function to handle MongoDB connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log(mongoDB)
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

// Connect to MongoDB when the app starts
connectToDatabase();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});

// c6aWA8XFcob0CHSy