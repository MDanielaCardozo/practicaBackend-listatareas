export const crearTarea = (req, res)=>{
    res.send('crear una tarea en nuestra base de datos')
}

export const listarTareas = (req, res)=>{
    res.send('enviar lista de tareas')
}

export const obtenerTarea = (req, res)=>{
    res.send('Aqui envio un objeto tarea')
}

export const editarTarea = (req, res)=>{
    res.send('editamos tarea')
}

export const borrarTarea = (req, res)=>{
    res.send('borramos,eliminamos tarea')
}