import { Request, Response, NextFunction } from 'express';
import * as authorService from '../services/author.service';

export async function getAllAuthors(req: Request, res: Response, next: NextFunction) {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    next(error);
  }
}

export async function getAuthorById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const author = await authorService.getAuthorById(id);
    res.json(author);
  } catch (error) {
    next(error);
  }
}

export async function createAuthor(req: Request, res: Response, next: NextFunction) {
  try {
    const newAuthor = await authorService.createAuthor(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
}
