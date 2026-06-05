import clientes from "../models/cliente.models.js";

export async function getClientes(req, res){
    try {
        const getClientes = await clientes.find()
        res.json(getClientes)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export async function getClientesById(req, res){
    try {
        const getClientesById = await clientes.findById(req.params._id)
        res.json(getClientesById)
    } catch(err){
        res.status(400).json({ error: err.message})
    }
}

export async function createClientes(req, res){
    try {
        const createClientes = await clientes.create(req.body)
        res.status(201).json({message: "Cliente creado con éxito", cliente: createClientes})
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}

export async function deleteClientesById(req, res){
    try {
        const deleteClientesById = await clientes.findByIdAndDelete(req.params._id)
        res.json({message: "Cliente eliminado con éxito", cliente: deleteClientesById})
    } catch(err){
        res.status(400).json({ error: err.message})
    }
}

export async function editClientesById(req, res){
    try {
        const editClientesById = await clientes.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.json({message: `Cliente - ${req.params._id} - editado con éxito`})
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}