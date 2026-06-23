import { Router } from "express";
import { getClientes, getClientesById, deleteClientesById, editClientesById, createClientes } from "../controller/cliente.controller.js";
import { getProductos, getProductosById, createProductos, editProductosById, deleteProductosById } from "../controller/producto.controller.js";
import { getServicios, getServiciosById, createServicios, editServiciosById, deleteServiciosById } from "../controller/servicio.controller.js";

const router = Router();

router.post("/clientes", createClientes);
router.get("/clientes", getClientes);
router.get("/clientes/:_id", getClientesById);
router.delete("/clientes/:_id", deleteClientesById);
router.put("/clientes/:_id", editClientesById);

router.post("/productos", createProductos);
router.get("/productos", getProductos);
router.get("/productos/:_id", getProductosById);
router.put("/productos/:_id", editProductosById);
router.delete("/productos/:_id", deleteProductosById);

router.post("/servicios", createServicios);
router.get("/servicios", getServicios);
router.get("/servicios/:_id", getServiciosById);
router.put("/servicios/:_id", editServiciosById);
router.delete("/servicios/:_id", deleteServiciosById);

export default router;