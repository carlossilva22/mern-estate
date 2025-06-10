import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.router.js';
import authRoutes from './routes/auth.router.js';
import listingRouter from './routes/listing.router.js';
import cookieParser from 'cookie-parser';
import path from 'path';

import dotenv from 'dotenv';

dotenv.config();

const mongoURL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/mean-estate';
mongoose
  .connect(mongoURL)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/listing', listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
