import { authenticate, authorize } from './auth.middleware';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken');

describe('Auth Middleware', () => {
  const mockReq: any = { headers: {} };
  const mockRes: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe retornar 401 si no hay token', () => {
    authenticate(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(401);
  });

  test('debe agregar usuario al request si token válido', () => {
    (jwt.verify as jest.Mock).mockReturnValue({
      id: 1,
      email: 'test@test.com',
      role: 'ADMIN',
    });
    mockReq.headers.authorization = 'Bearer token123';
    authenticate(mockReq, mockRes, next);
    expect(next).toHaveBeenCalled();
    expect(mockReq.user).toEqual({ id: 1, email: 'test@test.com', role: 'ADMIN' });
  });

  test('authorize debe permitir acceso a roles correctos', () => {
    mockReq.user = { role: 'ADMIN' };
    const middleware = authorize('ADMIN', 'USER');
    middleware(mockReq, mockRes, next);
    expect(next).toHaveBeenCalled();
  });

  test('authorize debe retornar 403 si rol no permitido', () => {
    mockReq.user = { role: 'USER' };
    const middleware = authorize('ADMIN');
    middleware(mockReq, mockRes, next);
    expect(mockRes.status).toHaveBeenCalledWith(403);
  });
});
