const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: false,
  },
  DOB: {
    type: Object,
    required: false,
  },
  Salary: {
    type: Object,
    required: false,
  },
  position: {
    type: Object,
    required: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_CODE, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     first_name: Joi.string().required().label("fullname"),
//     last_name: Joi.string().required().label("fullname"),
//     email: Joi.string().required().label("email"),
//     password: passwordComplexity().required().label("password"),
//     role: Joi.string().valid("doctor", "user").label("role"),
//   });
//   return schema.validate(data);
// };
const validate = (data) => {
  let schema;
  //   if (data.role === "user") {
  //     schema = Joi.object({
  //       first_name: Joi.string().required().label("First Name"),
  //       last_name: Joi.string().required().label("Last Name"),
  //       email: Joi.string().email().required().label("Email"),
  //       password: Joi.string().required().label("Password"),
  //       role: Joi.string().valid("user").required().label("Role"),
  //       address: Joi.object({
  //         street: Joi.string().required(),
  //         city: Joi.string().required(),
  //         state: Joi.string().required(),
  //         // Add other address properties if needed
  //       })
  //         .required()
  //         .label("Address"),
  //       DOB: Joi.object({
  //         year: Joi.number().integer().required(),
  //         month: Joi.number().integer().required(),
  //         day: Joi.number().integer().required(),
  //       })
  //         .required()
  //         .label("Date of Birth"),
  //     });
  //   } else if (data.role === "doctor") {
  //     schema = Joi.object({
  //       first_name: Joi.string().required().label("First Name"),
  //       last_name: Joi.string().required().label("Last Name"),
  //       phone: Joi.string().required().label("Phone"),
  //       password: Joi.string().required().label("Password"),
  //       role: Joi.string().valid("doctor").required().label("Role"),
  //       address: Joi.object({
  //         street: Joi.string().required(),
  //         city: Joi.string().required(),
  //         state: Joi.string().required(),
  //         // Add other address properties if needed
  //       })
  //         .required()
  //         .label("Address"),
  //       DOB: Joi.object({
  //         year: Joi.number().integer().required(),
  //         month: Joi.number().integer().required(),
  //         day: Joi.number().integer().required(),
  //       })
  //         .required()
  //         .label("Date of Birth"),
  //       Salary: Joi.object({
  //         amount: Joi.number().required(),
  //         currency: Joi.string().required(),
  //       })
  //         .required()
  //         .label("Salary"),
  //       position: Joi.object({
  //         title: Joi.string().required(),
  //         department: Joi.string().required(),
  //         // Add other position properties if needed
  //       })
  //         .required()
  //         .label("Position"),
  //     });
  //   } else {
  //     throw new Error("Invalid role specified");
  //   }

  return schema.validate(data);
};

module.exports = { User, validate };
