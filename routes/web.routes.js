import { Router } from "express";
import { renderClientes } from "../controller/cliente.view.controller.js";
import { renderProductos } from "../controller/producto.view.controller.js";
import { renderServicios } from "../controller/servicio.view.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("pages/index", { title: "Inicio" });
});

router.get("/clientes", renderClientes);
router.get("/productos", renderProductos);
router.get("/servicios", renderServicios);

export default router;