import productos from "../models/producto.models.js";

export async function renderProductos(req, res) {
    try {
        const data = await productos.find().lean();
        res.render("pages/productos", {
            title: "Productos",
            productos: data
        });
    } catch (err) {
        res.status(500).send("Error al obtener productos: " + err.message);
    }
}