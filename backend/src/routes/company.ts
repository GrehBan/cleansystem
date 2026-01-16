import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

const updateCompanySchema = z.object({
  companyName: z.string().min(1),
  nip: z.string().min(1),
  address: z.string().min(1),
  representative: z.string().min(1),
  city: z.string().min(1),
});

// Get company config
router.get('/', authenticate, async (_req: Request, res: Response, next: NextFunction) => {
  try {
    let config = await prisma.companyConfig.findUnique({
      where: { id: 'default' },
    });

    // If no config exists, create default
    if (!config) {
      config = await prisma.companyConfig.create({
        data: {
          id: 'default',
          companyName: 'VIVO CLEAN POLAND SP. Z O.O.',
          nip: '0000000000',
          address: 'ul. Przykładowa 1, 00-000 Warszawa',
          representative: 'Jan Kowalski',
          city: 'Warszawa',
        },
      });
    }

    res.json({ config });
  } catch (error) {
    next(error);
  }
});

// Update company config (admin only)
router.put('/', authenticate, requireAdmin, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = updateCompanySchema.parse(req.body);

    const config = await prisma.companyConfig.upsert({
      where: { id: 'default' },
      update: data,
      create: {
        id: 'default',
        ...data,
      },
    });

    res.json({ config });
  } catch (error) {
    next(error);
  }
});

export default router;
