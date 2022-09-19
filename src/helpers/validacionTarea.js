import resultadoValidacion from "./resultadoValidacion";
import { check } from 'express-validator';

const validarTarea = [
    check(
        'nombreTarea',
        'La tarea debe tener contenido'
    ).notEmpty(),
    check(
        'nombreTarea',
        'La tarea debe tener entre 5 y 150 caracteres'
    ).isLength({ min: 5, max: 150}),
    (req, res, next) => {
        resultadoValidacion(req, res, next)
    }
];

export default validarTarea;