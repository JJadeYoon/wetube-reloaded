import express from "express";
import {trending} from "../controllers/videoControllers";
import {join} from "../controllers/userControllers";

const globalRouter = express.Router();

// reason why not using folder: globalRouter is just for pretty urls
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;