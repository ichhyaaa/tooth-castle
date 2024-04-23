const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const connection = require("./db");
const cors = require("cors");

const registerRoutes = require("./routes/authentication/register");
const loginRoutes = require("./routes/authentication/login");
const appointmentRoutes = require("./routes/appointment");
const serviceRoutes = require("./routes/service");
const reviewRoutes = require("./routes/review");
const adminAppointmentRoutes = require("./routes/admin/appointment");
const adminDoctorRoutes = require("./routes/admin/doctor");
const adminUserRoutes = require("./routes/admin/user");
const loginAdminRoutes = require("./routes/admin/login");
const financeRecordRoutes = require("./routes/financeRecord");

//config

const app = express();
dotenv.config();
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
app.use("/api/appointment", appointmentRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/financeRecord", financeRecordRoutes);

//Admin
app.use("/api/admin/appointment", adminAppointmentRoutes);
app.use("/api/admin/doctor", adminDoctorRoutes);
app.use("/api/admin/user", adminUserRoutes);
app.use("/api/admin/login", loginAdminRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
connection();
