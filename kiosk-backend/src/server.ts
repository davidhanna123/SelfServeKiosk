
import express from 'express';
import http from "http";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(cors({
  credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);



const mongoURI = process.env.MONGO_URI;

mongoose.Promise = Promise;
mongoose.connect(mongoURI);

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


server.listen(8080, () => {
  console.log(`Server running on port http://localhost:8080/`);
});




