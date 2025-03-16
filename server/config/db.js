// filepath: [db.js](http://_vscodecontentref_/0)
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async (retries = 5, delay = 5000) => {
  while (retries) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log('✅ Connected to MongoDB Atlas');
      return;
    } catch (err) {
      console.error('❌ Error connecting to MongoDB Atlas:', err.message);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      if (retries === 0) {
        process.exit(1); // Exit process with failure if unable to connect
      }
      await new Promise(res => setTimeout(res, delay));
    }
  }
};

module.exports = connectDB;