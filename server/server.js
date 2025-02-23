// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); 
require('dotenv').config();
const discRoutes = require('./routes/discRoutes.js');
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Define your routes
app.use('/api', discRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
