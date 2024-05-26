const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Review } = require("../models/review");

router.post("/", async (req, res) => {
  const body = req.body;
  const newReview = await new Review({ ...body }).save();
  res
    .status(201)
    .send({ message: "Review sent successfully.", review: newReview });
});

module.exports = router;
