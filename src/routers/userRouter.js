import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

// const handleEditUser = (req, res) => res.send("Edit User");
// const handleDelete = (req, res) => res.send("Delete User");

userRouter.get(":id", see);
userRouter.get(":id/edit", edit);
userRouter.get(":id/remove", remove);
userRouter.get(":id/logout", logout);

export default userRouter;
