import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Import custom routes
import { flavourRoutes } from "./routes/flavourRoutes";
import { teaCategoryRoutes } from "./routes/teaCategoryRoutes";
import { teaProductRoutes } from "./routes/teaProductRoutes";

// Import custom middleware
import errorHandler from "./middleware/errorMiddleware";

// Instances
const app = express();

// Middleware Initialization
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

// API routing
app.use("/api/v1/flavour", flavourRoutes);
app.use("/api/v1/teaCategory", teaCategoryRoutes);
app.use("/api/v1/teaProduct", teaProductRoutes);

const port = process.env.PORT || 9000;

// Spin-up server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
