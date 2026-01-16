import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateUserProgress,
  acceptRodo,
} from '../services/user.service.js';
import { authenticate, requireAdmin, requireSelfOrAdmin } from '../middleware/auth.js';

const router = Router();

const createUserSchema = z.object({
  name: z.string().min(1),
  password: z.string().min(4),
  role: z.enum(['ADMIN', 'WORKER']).optional(),
  pesel: z.string().optional(),
  idNumber: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  jobTitle: z.string().optional(),
});

const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  password: z.string().min(4).optional(),
  pesel: z.string().optional(),
  idNumber: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  jobTitle: z.string().optional(),
});

const updateProgressSchema = z.object({
  completedLessons: z.array(z.number()).optional(),
  quizScore: z.number().optional(),
  passed: z.boolean().optional(),
});

// Get all users (admin only)
router.get('/', authenticate, requireAdmin, async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getAllUsers();
    res.json({ users });
  } catch (error) {
    next(error);
  }
});

// Get user by ID (admin or self)
router.get('/:id', authenticate, requireSelfOrAdmin('id'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getUserById(req.params.id as string);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

// Create new user (admin only)
router.post('/', authenticate, requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createUserSchema.parse(req.body);
    const user = await createUser(data);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

// Update user (admin or self)
router.put('/:id', authenticate, requireSelfOrAdmin('id'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = updateUserSchema.parse(req.body);
    const user = await updateUser(req.params.id as string, data);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

// Delete user (admin only)
router.delete('/:id', authenticate, requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteUser(req.params.id as string);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

// Update user progress (self only or admin)
router.put('/:id/progress/:moduleId', authenticate, requireSelfOrAdmin('id'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = updateProgressSchema.parse(req.body);
    const progress = await updateUserProgress(req.params.id as string, req.params.moduleId as string, data);
    res.json({ progress });
  } catch (error) {
    next(error);
  }
});

// Accept RODO consent (self only)
router.put('/:id/rodo', authenticate, requireSelfOrAdmin('id'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await acceptRodo(req.params.id as string);
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

export default router;
