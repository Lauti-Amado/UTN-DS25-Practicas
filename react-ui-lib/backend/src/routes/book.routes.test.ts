import request from 'supertest';
import { app } from '../app';

describe('Book Routes', () => {
  test('GET /api/books/public debe retornar 200', async () => {
    const res = await request(app).get('/api/books/public');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('GET /api/books/:id inexistente debe retornar 404', async () => {
    const res = await request(app).get('/api/books/99999');
    expect([404, 401]).toContain(res.status);
  });
});
