import db from "./config/database.js";
import express from "express";
import TransaksiRouter from "./routes/transaksiRoutes.js";

const app = express();

try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error("Connection error:", error);
  }

app.use(express.json());
app.use("/Transaksi", TransaksiRouter);
// app.use("/", (req, res)=>{
//   res.send('berhasil');
// });
app.listen(5000, () => console.log("Server jalan di port 5000"));