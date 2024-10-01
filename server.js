import express from 'express';
import { config } from './config/dotenvConfig.js';
import completionRoutes from './routes/completionRoutes.js';
import errorHandler from './middlewares/errorHandler.js'; 

config();  // Load environment variables

const app = express();
app.use(express.json());

// Routes
app.use('/complete-text', completionRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
