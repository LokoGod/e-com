import express from "express"
const flavourRoutes = express.Router()

import { getAllFlavours } from "../controllers/flavourController"

flavourRoutes.route("/").get(getAllFlavours)

export {flavourRoutes}