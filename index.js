import express from "express";
import cors from "cors";
import JadwalRoute from "./routes/JadwalRoute.js";
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
app.use(JadwalRoute);

app.listen(process.env.PORT, ()=> console.log(`Server berjalan di port '${process.env.PORT}'`));