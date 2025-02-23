// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load variables from .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1); // Exit process with failure if unable to connect
  }
};

module.exports = connectDB;
