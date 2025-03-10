import { NextFunction, Request, Response } from "express";
import teaProductRepository from "../repositories/teaProductRepository";

const getAllTeaProducts = async (req: Request, res: Response, next: NextFunction) =>  {
    try {
        const teaProd = await teaProductRepository.getAllTeaProducts()
        res.status(200).json(teaProd)
    } catch (error) {
        next(error)
    }
}

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

export { getAllTeaProducts, createTeaProduct };
