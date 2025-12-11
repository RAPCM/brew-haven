import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient as PrismaClientClass } from "@prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClientClass({ adapter });

export { prisma };
