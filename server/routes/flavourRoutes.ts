import express from "express"
const flavourRoutes = express.Router()

import { createFlavour, getAllFlavours } from "../controllers/flavourController"

flavourRoutes.route("/").get(getAllFlavours).post(createFlavour)

export {flavourRoutes}