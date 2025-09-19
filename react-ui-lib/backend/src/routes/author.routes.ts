import { Router } from 'express';
import * as controller from '../controllers/author.controller';
import { validate } from '../middlewares/validation.middleware';
import { createAuthorSchema } from '../validations/author.validation';

const router = Router();

router.get('/', controller.getAllAuthors);
router.get('/:id', controller.getAuthorById);
router.post('/', validate(createAuthorSchema), controller.createAuthor);

export const authorRoutes = router;
