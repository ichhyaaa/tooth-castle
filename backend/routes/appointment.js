const router = require("express").Router();
const { Appointment, validate } = require("../models/appointment");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  await new Appointment({ ...body }).save();
  res.status(201).send({ message: "Appointment created successfully" });
});

module.exports = router;
