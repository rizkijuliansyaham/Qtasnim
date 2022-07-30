import express from "express";

import {
    deleteTransaksi,
    getDataTransaksi, getTransaksiById, createDataTransaksi, updateDataTransaksi,
} from "../controllers/TransaksiData.js";

const TransaksiRouter = express.Router();
TransaksiRouter.get("/", getDataTransaksi);
TransaksiRouter.post("/update/:id_transaksi", updateDataTransaksi);
TransaksiRouter.get("/:id_transaksi", getTransaksiById);
TransaksiRouter.post("/create", createDataTransaksi);
TransaksiRouter.delete("/delete/:id_transaksi", deleteTransaksi);
// TransaksiRouter.post("/:id_transaksi", update)

export default TransaksiRouter;
