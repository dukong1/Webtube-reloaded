import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};

const handlHome = (req, res, next) => {
  return res.send("<h1> I still love you </h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", gossipMiddleware, handlHome);
app.get("/login", handleLogin);

// app.get("/", (req , res) => {
//   console.log(req);
// };

app.listen(PORT, () =>
  console.log("Server listening on port http://localhost:4000 🍿")
);
