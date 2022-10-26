import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();

const morganMiddleware = morgan("dev");

app.use(morgan("dev"));

// const globalRouter = express.Router();

// const handleHome = (req, res) => res.send("Home");

// globalRouter.get("/", handleHome);

// const userRouter = express.Router();

// const handleEditUser = (req, res) => res.send("Edit User");

// userRouter.get("/edit", handleEditUser);

// const videoRouter = express.Router();

// const handleWatchVideo = (req, res) => res.send("Watch Video");

// videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// const privateMiddleware = (req, res, next) => {
//   const url = req.url;
//   if (url === "/protected") {
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   console.log("Allowed, you may continue");
//   next();
// };

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

// app.use(logger);
// app.use(privateMiddleware);
// app.get("/", handlHome);
// app.get("/protected", handleProtected);
// app.get("/login", handleLogin);

// app.get("/", (req , res) => {
//   console.log(req);
// };

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost: ${PORT} 🍿`)
);
