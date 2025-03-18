const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); 
require('dotenv').config();
const discRoutes = require('./routes/discRoutes.js');
const bigFiveRoutes = require('./routes/bigfiveRoutes.js');
const mbtiRoutes = require('./routes/mbtiRoutes.js');
const careerAptitudeRoutes = require('./routes/aptitudeRoutes.js');
const enneagramRoutes = require('./routes/enneagramRoute.js');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    console.log('✅ MongoDB Connected. Starting server...');

    // Define routes after DB connection
    app.use('/api/disc', discRoutes);
    app.use('/api/bigfive', bigFiveRoutes);
    app.use('/api/mbti', mbtiRoutes);
    app.use('/api/careeraptitude', careerAptitudeRoutes);
    app.use('/api/enneagram', enneagramRoutes);
    
    // Start server only after DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Server failed to start due to DB connection error:', err);
  });
