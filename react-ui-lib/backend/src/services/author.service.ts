import prisma from '../config/prisma';
import { Author } from '@prisma/client';

export async function getAllAuthors(): Promise<Author[]> {
  return prisma.author.findMany({
    include: { books: true },
    orderBy: { id: 'asc' }
  });
}

export async function getAuthorById(id: number): Promise<Author> {
  const author = await prisma.author.findUnique({
    where: { id },
    include: { books: true }
  });
  if (!author) {
    const error = new Error('Autor no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  return author;
}

export async function createAuthor(data: { name?: string }): Promise<Author> {
  if (!data.name || !data.name.trim()) {
    const error = new Error('El nombre del autor es obligatorio');
    (error as any).statusCode = 400;
    throw error;
  }
  return prisma.author.create({
    data: { name: data.name.trim() }
  });
}
