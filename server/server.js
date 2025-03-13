// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); 
require('dotenv').config();
const discRoutes = require('./routes/discRoutes.js');
const bigFiveRoutes = require('./routes/bigfiveRoutes.js');
const mbtiRoutes = require('./routes/mbtiRoutes.js');
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Define your routes
app.use('/api/disc', discRoutes);
app.use('/api/bigfive', bigFiveRoutes);
app.use('/api/mbti', mbtiRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
