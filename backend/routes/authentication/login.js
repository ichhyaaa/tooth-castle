const router = require("express").Router();
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/:role", async (req, res) => {

  const role = req.params.role;

  const user = await User.findOne({ email: req.body.email, role: role });

  if (!user)
    return res.status(401).send({ message: "Invalid Email or Password" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) console.log("Error");
  return res.status(200).send({ user, message: "logged in successfully" });
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
