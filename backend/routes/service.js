const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Service } = require("../models/services");

router.get("/", async (req, res) => {
  const services = await Service.find();
  res.status(200).send(services);
});

module.exports = router;
