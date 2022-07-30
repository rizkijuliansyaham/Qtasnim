import express from "express";

import {
    getDataBarang,
} from "../controllers/BarangData.js";

const BarangRouter = express.Router();
BarangRouter.get("/", getDataBarang);

export default BarangRouter;
