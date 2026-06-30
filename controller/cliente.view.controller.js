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

export async function editarCliente(req, res) {
    try {
        await clientes.findByIdAndUpdate(req.params._id, req.body);
        res.redirect("/clientes");
    } catch (err) {
        res.status(500).send("Error al editar cliente: " + err.message);
    }
}

export async function eliminarCliente(req, res) {
    try {
        await clientes.findByIdAndDelete(req.params._id);
        res.redirect("/clientes");
    } catch (err) {
        res.status(500).send("Error al eliminar cliente: " + err.message);
    }
}