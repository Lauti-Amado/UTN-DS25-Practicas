import { Book, CreateBookRequest } from '../types/book.types';

let books: Book[] = [
  {
    id: 1,
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    imagenSrc: '/img/placeholder.jpg'
  },
  {
    id: 2,
    titulo: 'Fahrenheit 451',
    autor: 'Ray Bradbury',
    imagenSrc: '/img/placeholder.jpg'
  }
];

export async function getAllBooks(): Promise<Book[]> {
  return books;
}

export async function getBookById(id: number): Promise<Book> {
  const book = books.find(b => b.id === id);
  if (!book) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook(data: CreateBookRequest): Promise<Book> {
  if (!data.titulo || !data.autor) {
    const error = new Error('El título y el autor son obligatorios.');
    (error as any).statusCode = 400;
    throw error;
  }

  const newBook: Book = {
    id: books.length + 1,
    titulo: data.titulo.trim(),
    autor: data.autor.trim(),
    imagenSrc: data.imagenSrc?.trim() || '/img/placeholder.jpg',
  };

  books.push(newBook);
  console.log('📚 Libros actuales:', books);
  return newBook;
}

export async function updateBook(id: number, data: Partial<CreateBookRequest>): Promise<Book> {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }

  books[index] = {
    ...books[index],
    ...data,
    titulo: data.titulo?.trim() || books[index].titulo,
    autor: data.autor?.trim() || books[index].autor,
    imagenSrc: data.imagenSrc?.trim() || books[index].imagenSrc,
  };

  return books[index];
}

export async function deleteBook(id: number): Promise<void> {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    const error = new Error('Libro no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }

  books.splice(index, 1);
}
