const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const appointmentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  appointment_date: {
    type: Date,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
});

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_CODE, {
//     expiresIn: "7d",
//   });
//   return token;
// };

const Appointment = mongoose.model("Appointment", appointmentSchema);

const validate = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required().label("first_name"),
    last_name: Joi.string().required().label("last_name"),
    age: Joi.number().required().label("age"),
    phone: Joi.string().required().label("phone"),
    address: Joi.string().required().label("address"),
    email: Joi.string().required().label("email"),
    service_id: Joi.string().required().label("service_id"),
    user_id: Joi.string().required().label("user_id"),
    appointment_date: Joi.date().required().label("appointment_date"),
    problem: Joi.string().required().label("problem"),
  });
  return schema.validate(data);
};

module.exports = { Appointment, validate };
