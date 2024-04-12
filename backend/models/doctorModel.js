const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    userId: {
        type: String, 
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
   
  
    mobileNumber: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    specialization: {
        
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    feePerConsultation: {
        type: String,
        required: true
    },
    timings: {
        type: [],
        required: true
    },
   status:{
    type: String,
    default: 'Pending'
   }
   
}, {timestamps: true})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_CODE, {
      expiresIn: "7d",
    });
    return token;
  };

const Doctor = mongoose.model('Doctor', doctorSchema)
const validate = (data) => {
    const schema = Joi.object({
      firstName: Joi.string().required().label("First Name"),
      lastName: Joi.string().required().label("Last Name"),
      email: Joi.string().required().label("Email"),
      password: passwordComplexity().required().label("Password"),
      role: Joi.string().label("Role"),
    });
    return schema.validate(data);
  };

module.exports = Doctor