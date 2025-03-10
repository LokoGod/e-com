import { NextFunction, Request, Response } from "express";
import teaProductRepository from "../repositories/teaProductRepository";

const createTeaProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, price, flavourId, categoryId } = req.body;
  try {
    const teaProd = await teaProductRepository.createTeaProduct(
      title,
      description,
      price,
      flavourId,
      categoryId
    );
    res.status(201).json(teaProd);
  } catch (error) {
    next(error);
  }
};

export { createTeaProduct };
