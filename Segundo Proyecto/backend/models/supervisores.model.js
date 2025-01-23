import { Schema, model } from 'mongoose';
import { esquemaEmpleado } from './empleados.model.js';

export const ModeloEmpleado = new model('Supervisor', esquemaEmpleado);