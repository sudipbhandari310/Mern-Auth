import express from 'express';
import dotenv from 'dotenv';
import { connDB } from './db/connDB.js';
import authRoutes from './routes/authRoutes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Test route');
});
connDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
