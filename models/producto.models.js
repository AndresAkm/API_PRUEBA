import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    precio: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: Number, 
        default: 0 
    }
}, { versionKey: false });

const productos = mongoose.model("productos", productoSchema)

export default productos
