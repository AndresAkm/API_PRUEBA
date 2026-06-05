import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-osrkhxf-shard-00-00.guvuz2o.mongodb.net:27017,ac-osrkhxf-shard-00-01.guvuz2o.mongodb.net:27017,ac-osrkhxf-shard-00-02.guvuz2o.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-z6zdvr-shard-0&authSource=admin&appName=Cluster0`

const conectarDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a MongoDB exitosamente");
    } catch (err) {
        console.error("Error al conectar a MongoDB:", err);
    }
};

conectarDB();

export default conectarDB;
