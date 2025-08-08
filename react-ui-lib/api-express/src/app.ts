import express from 'express';
import cors from 'cors';
import { bookRoutes } from './routes/book.routes';
import { logRequest } from './middlewares/logger.middleware';
import { handleError } from './middlewares/error.middleware';

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());
app.use(logRequest);
app.use('/api/books', bookRoutes);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
