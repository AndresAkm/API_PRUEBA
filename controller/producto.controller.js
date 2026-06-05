import productos from "../models/producto.models.js";

export async function getProductos(req, res){
    try {
        const getProductos = await productos.find()
        res.json(getProductos)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export async function getProductosById(req, res){
    try {
        const getProductosById = await productos.findById(req.params._id)
        res.json(getProductosById)
    } catch(err){
        res.status(400).json({ error: err.message})
    }
}

export async function createProductos(req, res){
    try {
        const createProductos = await productos.create(req.body)
        res.status(201).json({message: "Producto creado con éxito", producto: createProductos})
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}

export async function editProductosById(req, res){
    try {
        const editProductosById = await productos.findByIdAndUpdate(req.params._id, req.body, { new: true })
        res.json({message: `Producto - ${req.params._id} - editado con éxito`})
    } catch (err) {
        res.status(400).json({ error: err.message})
    }
}

export async function deleteProductosById(req, res){
    try {
        const deleteProductosById = await productos.findByIdAndDelete(req.params._id)
        res.json({message: "Producto eliminado con éxito", producto: deleteProductosById})
    } catch(err){
        res.status(400).json({ error: err.message})
    }
}
