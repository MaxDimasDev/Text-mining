import { modeloreprobados } from "../Models/Reprobados.model.js";

modeloreprobados.create({
    name: "pancho",
    apepap: "perez",
    apemat: "xochimilco",
    edad: 109
})

export const test =()=>{
    console.log("Test de creacion")
}