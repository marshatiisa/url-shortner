import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import urlRoutes from './routes/urlRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', urlRoutes);

// MongoDB connection
const MONGO_URI = 'mongodb+srv://marshatiisa35:AMO2PoofVvESasns@cluster0.7s9doxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
