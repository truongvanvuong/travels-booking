import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';

import tourRoute from './Routes/tours.js';
import userRoute from './Routes/user.js';
import authRoute from './Routes/auth.js';
import reviewRoute from './Routes/reviews.js';
import bookingRoute from './Routes/bookings.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
  credentials: true,
};

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log('Connected to mongodb');
  } catch (error) {
    console.log('Connected to mongodb failed: ' + error);
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send('api is working');
});

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

app.listen(port, () => {
  connect();
  console.log(`listening on port ${port}`);
});
