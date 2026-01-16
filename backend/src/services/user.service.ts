import { PrismaClient, Role } from '@prisma/client';
import { hashPassword } from './auth.service.js';
import { AppError } from '../middleware/errorHandler.js';

const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.user.findMany({
    include: {
      progress: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return users.map(({ passwordHash, ...user }) => user);
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      progress: true,
    },
  });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export interface CreateUserInput {
  name: string;
  password: string;
  role?: Role;
  pesel?: string;
  idNumber?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  jobTitle?: string;
}

export async function createUser(input: CreateUserInput) {
  const passwordHash = await hashPassword(input.password);

  const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  const user = await prisma.user.create({
    data: {
      name: input.name,
      passwordHash,
      role: input.role || 'WORKER',
      certificateId,
      pesel: input.pesel,
      idNumber: input.idNumber,
      address: input.address,
      phoneNumber: input.phoneNumber,
      email: input.email,
      jobTitle: input.jobTitle,
    },
    include: {
      progress: true,
    },
  });

  const { passwordHash: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export interface UpdateUserInput {
  name?: string;
  password?: string;
  pesel?: string;
  idNumber?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  jobTitle?: string;
}

export async function updateUser(id: string, input: UpdateUserInput) {
  const updateData: Record<string, unknown> = { ...input };

  if (input.password) {
    updateData.passwordHash = await hashPassword(input.password);
    delete updateData.password;
  }

  const user = await prisma.user.update({
    where: { id },
    data: updateData,
    include: {
      progress: true,
    },
  });

  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id },
  });
}

export interface UpdateProgressInput {
  completedLessons?: number[];
  quizScore?: number;
  passed?: boolean;
}

export async function updateUserProgress(
  userId: string,
  moduleId: string,
  input: UpdateProgressInput
) {
  const progress = await prisma.userProgress.upsert({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
    update: input,
    create: {
      userId,
      moduleId,
      ...input,
    },
  });

  return progress;
}

export async function acceptRodo(userId: string) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      rodoAccepted: true,
      rodoAcceptedDate: new Date(),
    },
  });

  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
