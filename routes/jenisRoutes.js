import express from "express";

import {
    createDataJenis,
    deleteJenis,
    getDataJenis, getJenisById, updateDataJenis,
} from "../controllers/JenisData.js";

const JenisRouter = express.Router();
JenisRouter.get("/", getDataJenis);
JenisRouter.post("/update/:id_jenis", updateDataJenis);
JenisRouter.get("/:id_jenis", getJenisById);
JenisRouter.post("/create", createDataJenis);
JenisRouter.delete("/delete/:id_jenis", deleteJenis);
// TransaksiRouter.post("/:id_transaksi", update)

export default JenisRouter;
