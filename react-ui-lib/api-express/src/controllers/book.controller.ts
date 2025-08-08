import { Request, Response, NextFunction } from 'express';
import { Book, CreateBookRequest } from '../types/book.types';
import * as bookService from '../services/book.service';

export async function getAllBooks(req: Request, res: Response<Book[]>, next: NextFunction) {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
}

export async function getBookById(req: Request, res: Response<Book>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const book = await bookService.getBookById(id);
    res.json(book);
  } catch (error) {
    next(error);
  }
}

export async function createBook(
  req: Request<{}, {}, CreateBookRequest>,
  res: Response<Book>,
  next: NextFunction
) {
  try {
    console.log('📥 Libro recibido del frontend:', req.body);
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
}

export async function updateBook(req: Request, res: Response<Book>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    const updatedBook = await bookService.updateBook(id, req.body);
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
}

export async function deleteBook(req: Request, res: Response<{ message: string }>, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    await bookService.deleteBook(id);
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    next(error);
  }
}
