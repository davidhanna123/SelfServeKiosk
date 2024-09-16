import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const port = process.env.PORT || 5000;
//change uri later
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:5173/mydatabase';

const app = express();


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

//test route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


