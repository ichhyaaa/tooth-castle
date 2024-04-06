require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const connection = require("./db");
const cors = require("cors");

const registerRoutes = require("./routes/authentication/register");
const loginRoutes = require("./routes/authentication/login");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

//routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
connection();
