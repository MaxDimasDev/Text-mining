import { ModeloEmpleado } from "../models/supervisores.model.js";

ModeloEmpleado.create({
    name: 'John Doe',
    apepat: 'Smith',
    apemat: 'Johnson',
    numero_de_supervisor: 1001,
    salary: 70010
});

export const test = async () => {
    console.log('Test exitoso');
};