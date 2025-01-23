import { ModeloEmpleado } from "../models/empleados.model.js";

ModeloEmpleado.create({
    name: 'John Doe',
    apepat: 'Smith',
    apemat: 'Johnson',
    numeroDeEmpleado: 1,
    salary: 70000
});

export const test2 = async () => {
    console.log('Test exitoso');
};