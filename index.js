import express from "express";
import cors from "cors";
import JadwalRoute from "./routes/JadwalRoute.js";
const port = 4000

const app = express();
app.use(cors());
app.use(express.json());
app.use(JadwalRoute);

app.listen(port, ()=> console.log(`Server berjalan di port '${port}'`));