import { Request, Response, NextFunction } from 'express';
import * as bookController from './book.controller';
import * as bookService from '../services/book.service';

jest.mock('../services/book.service');

describe('BookController', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      json: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  //  TEST 1: getAllBooks
  test('debe retornar lista de libros', async () => {
    const mockBooks = [
      { id: 1, title: '1984', author: { id: 1, name: 'Orwell' } },
      { id: 2, title: 'El Aleph', author: { id: 2, name: 'Borges' } },
    ];
    (bookService.getAllBooks as jest.Mock).mockResolvedValue(mockBooks);

    await bookController.getAllBooks(mockReq as Request, mockRes as Response, next);

    expect(bookService.getAllBooks).toHaveBeenCalled();
    expect(mockRes.json).toHaveBeenCalledWith(mockBooks);
  });

  // TEST 2: getBookById 
  test('debe retornar un libro por ID', async () => {
    // ARRANGE
    mockReq.params = { id: '1' };
    const mockBook = { id: 1, title: '1984' };
    (bookService.getBookById as jest.Mock).mockResolvedValue(mockBook);

    // ACT
    await bookController.getBookById(mockReq as Request, mockRes as Response, next);

    // ASSERT
    expect(bookService.getBookById).toHaveBeenCalledWith(1);
    expect(mockRes.json).toHaveBeenCalledWith(mockBook);
  });

  test('debe llamar next(error) si getBookById lanza error', async () => {
    // ARRANGE
    const error = new Error('Libro no encontrado');
    mockReq.params = { id: '99' };
    (bookService.getBookById as jest.Mock).mockRejectedValue(error);

    // ACT
    await bookController.getBookById(mockReq as Request, mockRes as Response, next);

    // ASSERT
    expect(next).toHaveBeenCalledWith(error);
  });

  // TEST 3: createBook
  test('debe crear un libro correctamente', async () => {
    // ARRANGE
    const mockBody = { title: 'Rayuela', price: 100, authorId: 3 };
    const mockCreated = { id: 10, ...mockBody };
    mockReq.body = mockBody;
    (bookService.createBook as jest.Mock).mockResolvedValue(mockCreated);

    // ACT
    await bookController.createBook(mockReq as Request, mockRes as Response, next);

    // ASSERT
    expect(bookService.createBook).toHaveBeenCalledWith(mockBody);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockCreated);
  });

  test('debe llamar next(error) si createBook lanza error', async () => {
    const error = new Error('El autor no existe');
    mockReq.body = { title: 'Fake Book', authorId: 999 };
    (bookService.createBook as jest.Mock).mockRejectedValue(error);

    await bookController.createBook(mockReq as Request, mockRes as Response, next);

    expect(next).toHaveBeenCalledWith(error);
  });

  // TEST 4: updateBook
  test('debe actualizar libro correctamente', async () => {
    mockReq.params = { id: '5' };
    mockReq.body = { title: 'Nuevo título' };
    const mockUpdated = { id: 5, title: 'Nuevo título' };
    (bookService.updateBook as jest.Mock).mockResolvedValue(mockUpdated);

    await bookController.updateBook(mockReq as Request, mockRes as Response, next);

    expect(bookService.updateBook).toHaveBeenCalledWith(5, mockReq.body);
    expect(mockRes.json).toHaveBeenCalledWith(mockUpdated);
  });

  test('debe llamar next(error) si updateBook lanza error', async () => {
    const error = new Error('Libro no encontrado');
    mockReq.params = { id: '10' };
    mockReq.body = { title: 'Inexistente' };
    (bookService.updateBook as jest.Mock).mockRejectedValue(error);

    await bookController.updateBook(mockReq as Request, mockRes as Response, next);

    expect(next).toHaveBeenCalledWith(error);
  });

  // TEST 5: deleteBook 
  test('debe eliminar libro correctamente', async () => {
    mockReq.params = { id: '3' };
    (bookService.deleteBook as jest.Mock).mockResolvedValue(undefined);

    await bookController.deleteBook(mockReq as Request, mockRes as Response, next);

    expect(bookService.deleteBook).toHaveBeenCalledWith(3);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Libro eliminado correctamente' });
  });

  test('debe llamar next(error) si deleteBook lanza error', async () => {
    const error = new Error('Libro no encontrado');
    mockReq.params = { id: '8' };
    (bookService.deleteBook as jest.Mock).mockRejectedValue(error);

    await bookController.deleteBook(mockReq as Request, mockRes as Response, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
