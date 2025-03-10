import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createTeaProduct = async (
  title: string,
  description: string,
  price: number,
  flavourId: number,
  categoryId: number
) => {
  return prisma.tea_Product.create({
    data: { title, description, price, flavourId, categoryId },
  });
};

const teaProductRepository = {
  createTeaProduct,
};

export default teaProductRepository;
