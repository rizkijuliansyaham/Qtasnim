import db from "./config/database.js";
import express from "express";
import TransaksiRouter from "./routes/transaksiRoutes.js";
import BarangRouter from "./routes/barangRoutes.js";
import JenisRouter from "./routes/jenisRoutes.js";
import SearchRouter from "./routes/searchRoutes.js";

const app = express();
try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Connection error:", error);
  }

app.use(express.json());
app.use("/Transaksi", TransaksiRouter);
app.use("/Barang", BarangRouter);
app.use("/Jenis", JenisRouter);
app.use(SearchRouter);

app.listen(5000, () => console.log("Server jalan di port 5000"));