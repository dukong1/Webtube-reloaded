import express from "express";
import { join, login } from "../controllers/userController";
import { recommended, search } from "../controllers/videoController";

const globalRouter = express.Router();

// const handleHome = (req, res) => res.send("Home");
// const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", recommended);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
