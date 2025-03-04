import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllTeaCategories = async () => {
  return prisma.tea_Category.findMany();
};

const createTeaCategory = async (catName: string) => {
  return prisma.tea_Category.create({
    data: { catName },
  });
};

const teaCategoryRepository = {
  getAllTeaCategories,
  createTeaCategory,
};

export default teaCategoryRepository;
