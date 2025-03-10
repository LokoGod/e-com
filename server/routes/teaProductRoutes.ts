import express from "express";
const teaProductRoutes = express.Router();

import { createTeaProduct } from "../controllers/teaProductController";

teaProductRoutes.route("/").post(createTeaProduct);

export { teaProductRoutes };
