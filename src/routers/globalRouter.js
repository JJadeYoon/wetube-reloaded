import express from "express";
import {trending, search} from "../controllers/videoControllers";
import {join, login} from "../controllers/userControllers";

const globalRouter = express.Router();

// reason why not using folder: globalRouter is just for pretty urls
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;