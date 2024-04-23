const router = require("express").Router();
const { User, validate } = require("../../models/user");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const users = await User.find({ role: "doctor" });

  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newDoctor = await new User({ ...body, role: "doctor" }).save();
  res
    .status(201)
    .send({ message: "Doctor created successfully", doctor: newDoctor });
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const user = await User.findOneAndUpdate(
    { _id: req.params.id, role: "doctor" },
    body,
    { new: true }
  );
  res.status(200).send({ message: "Doctor updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const body = req.body;
  const user = await User.findOneAndDelete(
    { _id: req.params.id, role: "doctor" },
    body,
    { new: true }
  );
  res.status(200).send({ message: "Doctor deleted successfully" });
});

module.exports = router;
