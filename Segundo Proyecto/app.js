import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test2 } from "./backend/Controllers/empleados.controller.js";
import { test } from "./backend/Controllers/supervisores.controller.js";

dotenv.config();
const app = express();
app.use(cors());

mongoose.connect(process.env.url_db)
 .then(() =>{console.log("MongoDB Connected...")})
  .catch((err) => {console.error("MongoDB connection error:", err)});
  



app.listen(27017, () => {console.log("Server running on port 27017...")});

test();

test2();
