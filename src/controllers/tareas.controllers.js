import Tarea from "../models/tarea";

export const crearTarea = async(req, res)=>{
    try {
        console.log(req.body)

        const tareaNueva = new Tarea({
            nombreTarea:req.body.nombreTarea
        });
        await tareaNueva.save()
        res.status(201).json({
            mensaje:'La tarea fue creada exitosamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:'La tarea fue enviada pero no pudo ser creado'
        })
    }
}

export const listarTareas = async(req, res)=>{
    try {
        const listaTareas = await Tarea.find();
        res.status(200).json(listaTareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar las tareas'
        })
    }
}

export const obtenerTarea = async(req, res)=>{
    try {
        console.log(req.params.id);
        const tareaBuscada = await Tarea.findById(req.params.id);
        res.status(200).json(tareaBuscada);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }
}

export const editarTarea = async(req, res)=>{
    try {
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'La tarea fue editada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:'Error al intentar editar la tarea'
        })
    }
}

export const borrarTarea = (req, res)=>{
    res.send('borramos,eliminamos tarea')
}