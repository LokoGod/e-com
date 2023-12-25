import express, { Application, Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// DB Connection

// Custom Routing


// Instances
const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// API Endpoints


const port: any = process.env.PORT || 9000;

const start = async () => {
  try {
    await connection(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
