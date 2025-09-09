import { Request, Response, NextFunction } from 'express';
import { CreateUserRequest, UpdateUserRequest, UserResponse, UsersListResponse } from '../types/user.types';
import * as userService from '../services/user.service';

export async function getAllUsers(req: Request, res: Response<UsersListResponse>, next: NextFunction) {
  try {
    const users = await userService.getAllUsers();
    res.json({ users, total: users.length, message: 'Users retrieved successfully' });
  } catch (error) { next(error); }
}

export async function getUserById(req: Request<{ id: string }>, res: Response<UserResponse>, next: NextFunction) {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    res.json({ user, message: 'User retrieved successfully' });
  } catch (error) { next(error); }
}

export async function createUser(req: Request<{}, {}, CreateUserRequest>, res: Response<UserResponse>, next: NextFunction) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ user, message: 'User created successfully' });
  } catch (error) { next(error); }
}

export async function updateUser(req: Request<{ id: string }, {}, UpdateUserRequest>, res: Response<UserResponse>, next: NextFunction) {
  try {
    const updatedUser = await userService.updateUser(parseInt(req.params.id), req.body);
    res.json({ user: updatedUser, message: 'User updated successfully' });
  } catch (error) { next(error); }
}

export async function deleteUser(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  try {
    await userService.deleteUser(parseInt(req.params.id));
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) { next(error); }
}
