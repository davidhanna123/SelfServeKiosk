import express from 'express';

import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



const app = express();
const port = process.env.PORT || 5000;
//change uri later
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:5173/mydatabase';


app.use(cors());
app.use(express.json());


mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Use the auth routes import routes folder
//app.use('/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


