import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 150
    }
});

const Tarea = mongoose.model('tarea', tareaSchema)

export default Tarea;