import { getBookById, createBook } from './book.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
  book: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
  author: {
    findUnique: jest.fn(),
  },
}));

describe('BookService', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe retornar un libro cuando existe', async () => {
    const mockBook = { id: 1, title: '1984', author: { id: 1, name: 'Orwell' } };
    (prisma.book.findUnique as jest.Mock).mockResolvedValue(mockBook);

    const result = await getBookById(1);

    expect(result).toEqual(mockBook);
    expect(prisma.book.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
      include: { author: true },
    });
  });

  test('debe lanzar error 404 cuando libro no existe', async () => {
    (prisma.book.findUnique as jest.Mock).mockResolvedValue(null);
    await expect(getBookById(99)).rejects.toThrow('Libro no encontrado');
  });

  test('debe crear libro cuando autor existe', async () => {
    (prisma.author.findUnique as jest.Mock).mockResolvedValue({ id: 1, name: 'Orwell' });
    const newBook = { id: 2, title: 'Animal Farm', authorId: 1 };
    (prisma.book.create as jest.Mock).mockResolvedValue(newBook);

    const result = await createBook({ title: 'Animal Farm', price: 100, authorId: 1 });

    expect(result).toEqual(newBook);
    expect(prisma.book.create).toHaveBeenCalled();
  });

  test('debe lanzar error si autor no existe', async () => {
    (prisma.author.findUnique as jest.Mock).mockResolvedValue(null);
    await expect(createBook({ title: 'Test', price: 50, authorId: 9 }))
      .rejects.toThrow('El autor no existe');
  });
});
