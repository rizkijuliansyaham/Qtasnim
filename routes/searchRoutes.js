import express, { Router } from "express";
import { getDataSearch } from "../controllers/SearchController.js";

const SearchRouter = express.Router();

SearchRouter.get('/search', getDataSearch);

export default SearchRouter;