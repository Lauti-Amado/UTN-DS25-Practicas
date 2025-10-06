import prisma from '../config/prisma';
import { Book } from '@prisma/client';

export async function getAllBooks(): Promise<Book[]> {
  return prisma.book.findMany({
    include: { author: true },
    orderBy: { id: 'asc' }
  });
}

export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({
    where: { id },
    include: { author: true }
  });
  if (!book) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook(data: { title: string; price: number; imageUrl?: string; authorId: number }): Promise<Book> {
  const authorExists = await prisma.author.findUnique({ where: { id: data.authorId } });
  if (!authorExists) {
    const error = new Error('El autor no existe');
    (error as any).statusCode = 404;
    throw error;
  }

  return prisma.book.create({
    data: {
      title: data.title.trim(),
      price: data.price,
      imageUrl: data.imageUrl?.trim() || '/img/placeholder.jpg',
      authorId: data.authorId
    },
    include: { author: true }
  });
}

export async function updateBook(id: number, data: Partial<{ title: string; price: number; imageUrl?: string; authorId: number }>): Promise<Book> {
  if (data.authorId) {
    const authorExists = await prisma.author.findUnique({ where: { id: data.authorId } });
    if (!authorExists) {
      const error = new Error('El autor no existe');
      (error as any).statusCode = 404;
      throw error;
    }
  }

  try {
    return await prisma.book.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title.trim() } : {}),
        ...(data.price !== undefined ? { price: data.price } : {}),
        ...(data.imageUrl !== undefined ? { imageUrl: data.imageUrl.trim() } : {}),
        ...(data.authorId !== undefined ? { authorId: data.authorId } : {})
      },
      include: { author: true }
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

export async function deleteBook(id: number): Promise<void> {
  try {
    await prisma.book.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Libro no encontrado');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
