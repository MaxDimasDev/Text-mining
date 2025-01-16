import{Schema, model} from "mongoose";

const schemareprobados = new Schema ({
    name: String,
    apepat: String,
    apemat: String,
    edad: String
})

export const modeloreprobados = new model("tablas de alumnos reprobados", schemareprobados)