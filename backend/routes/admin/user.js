const router = require("express").Router();
const { User, validate } = require("../../models/user");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const users = await User.find({ role: "user" });

  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newUser = await new User({ ...body, role: "user" }).save();
  res
    .status(201)
    .send({ message: "User created successfully", doctor: newUser });
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const user = await User.findOneAndUpdate(
    { _id: req.params.id, role: "user" },
    body,
    { new: true }
  );
  res.status(200).send({ message: "User updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const body = req.body;
  const user = await User.findOneAndDelete(
    { _id: req.params.id, role: "user" },
    body,
    { new: true }
  );
  res.status(200).send({ message: "User deleted successfully" });
});

module.exports = router;
