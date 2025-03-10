import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllTeaProducts = async () => {
  return prisma.tea_Product.findMany({ include: {flavour: true, category: true}})
}

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
  getAllTeaProducts,
  createTeaProduct,
};

export default teaProductRepository;
