import express from "express";
import join from "../controllers/userController";
import recommended from "../controllers/videoController";

const globalRouter = express.Router();

// const handleHome = (req, res) => res.send("Home");
// const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", recommended);
globalRouter.get("/join", join);

export default globalRouter;
