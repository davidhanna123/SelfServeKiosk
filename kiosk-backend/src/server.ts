
import express from 'express';
import http from "http";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';

dotenv.config();


const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173' // Replace with your frontend's URL
}));
app.use(express.json());
//app.use(compression());
//app.use(cookieParser());
//app.use(bodyParser.json());
const server = http.createServer(app);



const mongoURI = process.env.MONGO_URI;

mongoose.Promise = Promise;


mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the auth routes import routes folder
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001; 
//make sure 3001 is in the frontend await request
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`);
});





