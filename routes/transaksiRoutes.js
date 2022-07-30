import express from "express";

import {
    getDataTransaksi,
} from "../controllers/TransaksiData.js";

const TransaksiRouter = express.Router();
TransaksiRouter.get("/", getDataTransaksi);
// TransaksiRouter.post("/:id_transaksi", update)

export default TransaksiRouter;
