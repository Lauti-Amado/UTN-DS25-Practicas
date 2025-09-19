import { Router, Request, Response, NextFunction } from 'express';
import * as bookController from '../controllers/book.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { createBookSchema, updateBookSchema } from '../validations/book.validation';

const router = Router();

// === PÚBLICA: listado simple ===
router.get('/public', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await bookController.getAllBooks(req, res, next);
  } catch (e) { next(e); }
});

// === SEGURAS: requieren JWT ===
router.get('/', authenticate, authorize('ADMIN', 'USER'), bookController.getAllBooks);
router.get('/:id', authenticate, authorize('ADMIN', 'USER'), bookController.getBookById);

router.post('/', authenticate, authorize('ADMIN', 'USER'), validate(createBookSchema), bookController.createBook);
router.put('/:id', authenticate, authorize('ADMIN', 'USER'), validate(updateBookSchema), bookController.updateBook);
router.delete('/:id', authenticate, authorize('ADMIN'), bookController.deleteBook);

export const bookRoutes = router;
