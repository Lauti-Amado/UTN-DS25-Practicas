// src/services/auth.service.ts
import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { LoginRequest } from '../types/auth.types';

export async function login(data: LoginRequest) {
  // Buscar usuario por email
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) {
    const e: any = new Error('Credenciales inválidas');
    e.statusCode = 401;
    throw e;
  }

  // Comparar contraseña
  const ok = await bcrypt.compare(data.password, user.password);
  if (!ok) {
    const e: any = new Error('Credenciales inválidas');
    e.statusCode = 401;
    throw e;
  }

  // Configuración del JWT
  const JWT_SECRET: string = process.env.JWT_SECRET || 'default_secret_dev';
  const expiresIn: string = process.env.JWT_EXPIRES_IN || '2h';

  const payload = { id: user.id, email: user.email, role: user.role };

  // Firmar token
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn } as SignOptions);

  // Devolver usuario sin contraseña
  const { password, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
}
