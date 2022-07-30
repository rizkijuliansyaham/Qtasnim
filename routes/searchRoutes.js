import express, { Router } from "express";
import { getDataSearchSortNama, getDataSearchSortTanggal } from "../controllers/SearchController.js";

const SearchRouter = express.Router();

SearchRouter.get('/search1', getDataSearchSortNama);
SearchRouter.get('/search2', getDataSearchSortTanggal);

export default SearchRouter;