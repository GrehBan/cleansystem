import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create admin user
  const adminPasswordHash = await bcrypt.hash('admin123', 12);

  const admin = await prisma.user.upsert({
    where: { certificateId: 'CERT-ADMIN-001' },
    update: {},
    create: {
      name: 'Administrator',
      role: 'ADMIN',
      passwordHash: adminPasswordHash,
      certificateId: 'CERT-ADMIN-001',
      rodoAccepted: true,
      rodoAcceptedDate: new Date(),
    },
  });
  console.log('Created admin user:', admin.id);

  // Create default company config
  const config = await prisma.companyConfig.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      companyName: 'VIVO CLEAN POLAND SP. Z O.O.',
      nip: '0000000000',
      address: 'ul. Przykładowa 1, 00-000 Warszawa',
      representative: 'Jan Kowalski',
      city: 'Warszawa',
    },
  });
  console.log('Created company config:', config.id);

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
