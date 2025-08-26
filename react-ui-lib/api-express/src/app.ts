import express from 'express';
import cors from 'cors';
import { bookRoutes } from './routes/book.routes';
import { authorRoutes } from './routes/author.routes';
import { seedRoutes } from './routes/seed.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(logRequest);

// Rutas
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/seed', seedRoutes);
app.use(handleError);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
