import { PrismaClient } from '../generated/prisma';
import logger from './logger';

let prisma: PrismaClient;

const connectDB = () => {
  if (prisma) {
    return prisma;
  }

  prisma = new PrismaClient();

  prisma.$connect()
    .then(() => {
      logger.info('Database connected successfully');
    })
    .catch((error) => {
      logger.error('Database connection failed:', error);
      process.exit(1);
    });

  return prisma;
};

export default connectDB();