// const dotenv = require("dotenv");
// const express = require("express");
// const helmet = require("helmet");
// const connection = require("./db");
// const cors = require("cors");
// const mongoose = require("mongoose")
// // import dotenv from "dotenv";
// // import express from "express";

// const registerRoutes = require("./routes/authentication/register");
// const loginRoutes = require("./routes/authentication/login");

// const app = express();
// dotenv.config();

// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;

// mongoose.connect("mongodb+srv://ichhya:ichhya123@cluster0.qaibvjy.mongodb.net/")
//   .then(() => {
//     console.log("Database is connected sucessfully.");
//     app.listen(PORT, () => {
//       console.log("server is running on port ${PORT}");
//     });
//   })
//   .catch((error) => console.log(error));

// const corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// //middlewares
// app.use(express.json());
// app.use(cors(corsOptions));
// // app.use(helmet());

// //routes
// app.use("/api/register", registerRoutes);
// app.use("/api/login", loginRoutes);

// app.listen(8000, () => {
//   console.log("listening on port 8000");
// });
// connection();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Express and Mongoose connection!");
});

// Connect to db
mongoose
  .connect("mongodb+srv://ichhya:ichhya123@cluster0.qaibvjy.mongodb.net/")
  .then(() => {
    // Listen for requests
    app.listen(port, () => {
      console.log(
        `Connected to DB & Server is listening at http://127.0.0.1:${port}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
