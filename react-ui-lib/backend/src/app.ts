import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { bookRoutes } from './routes/book.routes';
import { authorRoutes } from './routes/author.routes';
import { seedRoutes } from './routes/seed.routes';
import { authRoutes } from './routes/auth.routes';
import { userRoutes } from './routes/user.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(logRequest);

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);   // Admin only
app.use('/api/books', bookRoutes);   // pública (/public) + seguras
app.use('/api/authors', authorRoutes);
app.use('/api/seed', seedRoutes);

// Manejo de errores al final
app.use(handleError);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
