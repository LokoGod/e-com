import express from "express";
const teaCategoryRoutes = express.Router();

import {
  createTeaCategory,
  getAllTeaCategories,
} from "../controllers/teaCategoryController";

teaCategoryRoutes.route("/").get(getAllTeaCategories).post(createTeaCategory);

export { teaCategoryRoutes };
