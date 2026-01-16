import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateTrainingLogInput {
  userId: string;
  userName: string;
  userPesel?: string;
  moduleId: string;
  moduleTitle: string;
  score: number;
  legalStatementAccepted: boolean;
  signatureData?: string;
  userSnapshotAddress?: string;
  userSnapshotIdNumber?: string;
  userSnapshotJobTitle?: string;
  legalMetaUserAgent?: string;
  legalMetaIp?: string;
  legalMetaEmployerName?: string;
}

export async function createTrainingLog(input: CreateTrainingLogInput) {
  const log = await prisma.trainingLog.create({
    data: input,
  });
  return log;
}

export async function getAllTrainingLogs(filters?: {
  userId?: string;
  moduleId?: string;
  fromDate?: Date;
  toDate?: Date;
}) {
  const where: Record<string, unknown> = {};

  if (filters?.userId) {
    where.userId = filters.userId;
  }
  if (filters?.moduleId) {
    where.moduleId = filters.moduleId;
  }
  if (filters?.fromDate || filters?.toDate) {
    where.timestamp = {};
    if (filters.fromDate) {
      (where.timestamp as Record<string, Date>).gte = filters.fromDate;
    }
    if (filters.toDate) {
      (where.timestamp as Record<string, Date>).lte = filters.toDate;
    }
  }

  const logs = await prisma.trainingLog.findMany({
    where,
    orderBy: {
      timestamp: 'desc',
    },
  });

  return logs;
}

export async function getTrainingLogsByUserId(userId: string) {
  const logs = await prisma.trainingLog.findMany({
    where: { userId },
    orderBy: {
      timestamp: 'desc',
    },
  });

  return logs;
}
