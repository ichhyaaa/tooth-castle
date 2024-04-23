const router = require("express").Router();
const { Appointment, validate } = require("../../models/appointment");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const appointment = await Appointment.find();

  res.status(200).send(appointment);
});

router.post("/", async (req, res) => {
  const body = req.body;
  await new Appointment({ ...body }).save();
  res.status(201).send({ message: "Appointment created successfully" });
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  await Appointment.findByIdAndUpdate(req.params.id, body);
  res.status(200).send({ message: "Appointment updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const body = req.body;
  await Appointment.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Appointment deleted successfully" });
});

module.exports = router;
