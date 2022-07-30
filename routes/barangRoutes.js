import express from "express";

import {
    getDataBarang,
    updateDataBarang,
    createDataBarang,
    getBarangById,
    deleteBarang
} from "../controllers/BarangData.js";

const BarangRouter = express.Router();
BarangRouter.get("/", getDataBarang);
BarangRouter.post("/update/:nama_barang", updateDataBarang);
BarangRouter.get("/:nama_barang", getBarangById);
BarangRouter.post("/create", createDataBarang);
BarangRouter.delete("/delete/:nama_barang", deleteBarang);
export default BarangRouter;
