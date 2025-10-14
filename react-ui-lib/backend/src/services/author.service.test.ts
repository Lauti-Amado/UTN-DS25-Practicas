import { getAuthorById, createAuthor } from './author.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
  author: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
}));

describe('AuthorService', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe retornar un autor existente', async () => {
    const mockAuthor = { id: 1, name: 'Gabriel García Márquez' };
    (prisma.author.findUnique as jest.Mock).mockResolvedValue(mockAuthor);

    const result = await getAuthorById(1);
    expect(result).toEqual(mockAuthor);
  });

  test('debe lanzar error si autor no existe', async () => {
    (prisma.author.findUnique as jest.Mock).mockResolvedValue(null);
    await expect(getAuthorById(99)).rejects.toThrow('Autor no encontrado');
  });

  test('debe crear autor correctamente', async () => {
    const mockNew = { id: 2, name: 'Cortázar' };
    (prisma.author.create as jest.Mock).mockResolvedValue(mockNew);
    const result = await createAuthor({ name: 'Cortázar' });
    expect(result).toEqual(mockNew);
  });

  test('debe lanzar error si no se pasa nombre', async () => {
    await expect(createAuthor({ name: '' }))
      .rejects.toThrow('El nombre del autor es obligatorio');
  });
});
