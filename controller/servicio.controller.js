import servicios from "../models/servicio.models.js";

export async function getServicios(req, res){
    try {
        const getServicios = await servicios.find()
        res.json(getServicios)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export async function getServiciosById(req, res){
    try {
        const getServiciosById = await servicios.findById(req.params._id)
        res.json(getServiciosById)
    } catch(err){
        res.status(400).json({ error: err.message})
    }
}

export async function createServicios(req, res){
    try {
        const createServicios = await servicios.create(req.body)
        res.status(201).json({message: "Servicio creado con éxito", servicio: createServicios})
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}

export async function editServiciosById(req, res){
    try {
        const editServiciosById = await servicios.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.json({message: `Servicio - ${req.params._id} - editado con éxito`})
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}

export async function deleteServiciosById(req, res){
    try {
        const deleteServiciosById = await servicios.findByIdAndDelete(req.params._id)
        res.json({message: "Servicio eliminado con éxito", servicio: deleteServiciosById})
    } catch(err){
        res.status(400).json({ error: err.message})
    }
}
