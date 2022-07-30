import express from "express";

import {
    getDataTransaksi,
} from "../controllers/TransaksiData.js";

const TransaksiRouter = express.Router();
TransaksiRouter.get("/", getDataTransaksi);

export default TransaksiRouter;
