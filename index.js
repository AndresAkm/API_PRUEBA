import "./config/config.js";
import express from "express";
import { configDotenv } from "dotenv";
import apiRouter from "./routes/api.routes.js";
import webRouter from "./routes/web.routes.js";

configDotenv()

const app = express()
const PORT = process.env.PORT

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", apiRouter);
app.use("/", webRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
  console.log(`API:     http://localhost:${PORT}/api/v1/clientes`)
  console.log(`Vistas:  http://localhost:${PORT}/clientes`)
});