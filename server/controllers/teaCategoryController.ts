import { NextFunction, Request, Response } from "express";
import teaCategoryRepository from "../repositories/teaCategoryRepository";

const getAllTeaCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const teaCat = await teaCategoryRepository.getAllTeaCategories();
    if (!teaCat.length) {
      res.status(404).json("No Tea Categories found");
    }
    res.status(200).json(teaCat);
  } catch (error) {
    next(error);
  }
};

const createTeaCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { catName } = req.body;
  try {
    const teaCat = await teaCategoryRepository.createTeaCategory(catName);
    res.status(201).json(teaCat);
  } catch (error) {
    next(error);
  }
};

export { getAllTeaCategories, createTeaCategory };
