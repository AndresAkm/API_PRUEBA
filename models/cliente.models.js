import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String
    }
}, { versionKey: false });

const clientes = mongoose.model("clientes", clienteSchema)

export default clientes