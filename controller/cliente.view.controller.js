import clientes from "../models/cliente.models.js";

export async function renderClientes(req, res) {
    try {
        const data = await clientes.find().lean();
        res.render("pages/clientes", {
            title: "Clientes",
            clientes: data
        });
    } catch (err) {
        res.status(500).send("Error al obtener clientes: " + err.message);
    }
}