import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    precio: { 
        type: Number, 
        required: true 
    },
    duracionMinutos: { 
        type: Number, 
        required: true 
    }
}, { versionKey: false });

const servicios = mongoose.model("servicios", servicioSchema)

export default servicios
