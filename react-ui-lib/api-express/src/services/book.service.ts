import prisma from '../config/prisma';
import { Book } from '../generated/prisma';

export async function getAllBooks(): Promise<Book[]> {
  return prisma.book.findMany({ orderBy: { id: 'asc' } });
}

export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({ where: { id } });
  if (!book) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook(data: { title: string; author: string; price: number; imageUrl?: string }): Promise<Book> {
  if (!data.title || !data.author) {
    const error = new Error('El título y el autor son obligatorios.');
    (error as any).statusCode = 400;
    throw error;
  }

  return prisma.book.create({
    data: {
      title: data.title.trim(),
      author: data.author.trim(),
      price: data.price,
      imageUrl: data.imageUrl?.trim() || '/img/placeholder.jpg',
    },
  });
}

export async function updateBook(id: number, data: Partial<{ title: string; author: string; price: number; imageUrl: string }>): Promise<Book> {
  try {
    return await prisma.book.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title.trim() } : {}),
        ...(data.author !== undefined ? { author: data.author.trim() } : {}),
        ...(data.price !== undefined ? { price: data.price } : {}),
        ...(data.imageUrl !== undefined ? { imageUrl: data.imageUrl.trim() } : {}),
      },
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

export async function deleteBook(id: number): Promise<Book> {
  try {
    return await prisma.book.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
