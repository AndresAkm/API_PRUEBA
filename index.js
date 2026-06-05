import "./config/config.js";
import express from "express";
import {getClientes, getClientesById, deleteClientesById, editClientesById, createClientes} from "./controller/cliente.controller.js";
import {getProductos, getProductosById, createProductos, editProductosById, deleteProductosById} from "./controller/producto.controller.js";
import {getServicios, getServiciosById, createServicios, editServiciosById, deleteServiciosById} from "./controller/servicio.controller.js";
import {configDotenv} from "dotenv";

configDotenv()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
});

app.post("/clientes", createClientes)
app.get("/clientes", getClientes);
app.get("/clientes/:_id", getClientesById)
app.delete("/clientes/:_id", deleteClientesById)
app.put("/clientes/:_id", editClientesById)

app.post("/productos", createProductos)
app.get("/productos", getProductos);
app.get("/productos/:_id", getProductosById)
app.put("/productos/:_id", editProductosById)
app.delete("/productos/:_id", deleteProductosById)

app.post("/servicios", createServicios)
app.get("/servicios", getServicios);
app.get("/servicios/:_id", getServiciosById)
app.put("/servicios/:_id", editServiciosById)
app.delete("/servicios/:_id", deleteServiciosById)