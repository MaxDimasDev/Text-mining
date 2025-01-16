import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { test } from "./Backend/Controllers/Reprobados.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() =>
    { console.log("Funciona")

})

.catch(err =>
    { console.error("No funciona", err)

})

const app = express();
app.use(cors());
app.listen(3003, () =>{ 
    console.log("Server funciona")
});

test ()