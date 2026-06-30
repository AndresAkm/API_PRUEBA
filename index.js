import "./config/config.js";
import express from "express";
import { configDotenv } from "dotenv";
import apiRouter from "./routes/api.routes.js";
import webRouter from "./routes/web.routes.js";
import methodOverride from "method-override";
import morgan from "morgan";

configDotenv()

const app = express()
const PORT = process.env.PORT

app.set("view engine", "ejs");

app.use(morgan("dev"))
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    return req.body._method;
  }
  if (req.query && req.query._method) {
    return req.query._method;
  }
}))

app.use("/api/v1", apiRouter);
app.use("/", webRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
  console.log(`API:     http://localhost:${PORT}/api/v1/clientes`)
  console.log(`Vistas:  http://localhost:${PORT}/clientes`)
});