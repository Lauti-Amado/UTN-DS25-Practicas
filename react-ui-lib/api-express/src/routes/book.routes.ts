import { Router } from 'express';
import * as controller from '../controllers/book.controller';
import { validate } from '../middlewares/validation.middleware';
import { createBookSchema, updateBookSchema } from '../validations/book.validation';

const router = Router();

router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);
router.post('/', validate(createBookSchema), controller.createBook);
router.put('/:id', validate(updateBookSchema), controller.updateBook);
router.delete('/:id', controller.deleteBook);

export const bookRoutes = router;
