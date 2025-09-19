import { Request, Response, NextFunction } from 'express';

export function handleError(err: any, req: Request, res: Response, next: NextFunction) {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ❌ Error:`, err.message);
  res.status(err.statusCode || 500).json({
    error: 'Internal Server Error',
    message: err.message || 'Ocurrió un error inesperado.',
    timestamp
  });
}
