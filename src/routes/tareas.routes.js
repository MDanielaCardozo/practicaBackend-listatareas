import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers";
import validarTarea from "../helpers/validacionTarea";

const router = Router();

router
  .route("/tareas")
  .get(listarTareas)
  .post(validarTarea, crearTarea);

router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .put(editarTarea)
  .delete(borrarTarea);

export default router;

//app.get('/', (req, res)=>{
//    res.send('primera peticion get')
//})

//app.get('/prueba', (req, res)=>{
//   res.send('segunda peticion get')
//})
