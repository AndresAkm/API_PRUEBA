import servicios from "../models/servicio.models.js";

export async function renderServicios(req, res) {
    try {
        const data = await servicios.find().lean();
        res.render("pages/servicios", {
            title: "Servicios",
            servicios: data
        });
    } catch (err) {
        res.status(500).send("Error al obtener servicios: " + err.message);
    }
}