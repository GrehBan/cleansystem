import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import {
  createTrainingLog,
  getAllTrainingLogs,
  getTrainingLogsByUserId,
} from '../services/log.service.js';
import { authenticate, requireAdmin, requireSelfOrAdmin } from '../middleware/auth.js';

const router = Router();

const createLogSchema = z.object({
  userId: z.string().uuid(),
  userName: z.string(),
  userPesel: z.string().optional(),
  moduleId: z.string(),
  moduleTitle: z.string(),
  score: z.number().min(0).max(100),
  legalStatementAccepted: z.boolean(),
  signatureData: z.string().optional(),
  userSnapshotAddress: z.string().optional(),
  userSnapshotIdNumber: z.string().optional(),
  userSnapshotJobTitle: z.string().optional(),
  legalMetaUserAgent: z.string().optional(),
  legalMetaIp: z.string().optional(),
  legalMetaEmployerName: z.string().optional(),
});

const filterSchema = z.object({
  userId: z.string().uuid().optional(),
  moduleId: z.string().optional(),
  fromDate: z.string().datetime().optional(),
  toDate: z.string().datetime().optional(),
});

// Get all training logs (admin only)
router.get('/', authenticate, requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters = filterSchema.parse(req.query);

    const logs = await getAllTrainingLogs({
      userId: filters.userId,
      moduleId: filters.moduleId,
      fromDate: filters.fromDate ? new Date(filters.fromDate) : undefined,
      toDate: filters.toDate ? new Date(filters.toDate) : undefined,
    });

    res.json({ logs });
  } catch (error) {
    next(error);
  }
});

// Get training logs for a specific user (admin or self)
router.get('/user/:userId', authenticate, requireSelfOrAdmin('userId'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const logs = await getTrainingLogsByUserId(req.params.userId as string);
    res.json({ logs });
  } catch (error) {
    next(error);
  }
});

// Create training log (authenticated user, immutable)
router.post('/', authenticate, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createLogSchema.parse(req.body);

    // Get client IP from request
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

    const log = await createTrainingLog({
      ...data,
      legalMetaIp: clientIp,
      legalMetaUserAgent: req.headers['user-agent'] || 'unknown',
    });

    res.status(201).json({ log });
  } catch (error) {
    next(error);
  }
});

export default router;
