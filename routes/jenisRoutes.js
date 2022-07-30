import express from "express";

import {
    getDataJenis,
} from "../controllers/JenisData.js";

const JenisRouter = express.Router();
JenisRouter.get("/", getDataJenis);
// TransaksiRouter.post("/:id_transaksi", update)

export default JenisRouter;
