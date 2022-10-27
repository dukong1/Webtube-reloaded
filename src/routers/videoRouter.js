import express from "express";
import { remove } from "../controllers/userController";
import { see, edit, upload } from "../controllers/videoController";

const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => res.send("Watch Video");
// const handleEdit = (req, res) => res.send("Edit Video");

videoRouter.get("/upload", upload);
videoRouter.get(":id", see);
videoRouter.get(":id/edit", edit);
videoRouter.get(":id/remove", remove);

export default videoRouter;
