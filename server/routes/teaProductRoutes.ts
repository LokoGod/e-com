import express from "express";
const teaProductRoutes = express.Router();

import { getAllTeaProducts, createTeaProduct } from "../controllers/teaProductController";

teaProductRoutes.route("/").get(getAllTeaProducts).post(createTeaProduct);

export { teaProductRoutes };
