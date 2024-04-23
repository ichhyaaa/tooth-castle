const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const reviewSchema = new mongoose.Schema({
  person_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

// reviewSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_CODE, { expiresIn: '7d' });
//     return token
// }

const Review = mongoose.model("Review", reviewSchema);

const validate = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required().label("first_name"),
    last_name: Joi.string().required().label("last_name"),
    age: Joi.number().required().label("age"),
    phone_number: Joi.number().required().label("phone_number"),
    address: Joi.string().required().label("address"),
    email: Joi.string().required().label("email"),
    review: Joi.date().required().label("review_comment"),
    rating: Joi.string().required().label("rating"),
  });
  return schema.validate(data);
};

module.exports = { Review, validate };
