import { Schema, model } from 'mongoose';

export const esquemaEmpleado = new Schema({
    name: String,
    numeroDeEmpleado: Number,
    apepat: String,
    apemat: String,
    salary: Number
});

export const ModeloEmpleado = new model('Empleado', esquemaEmpleado);