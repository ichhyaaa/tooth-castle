const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    desciption: {
        type: String, required: true
    },
    Price: {
        type: Number, required: true
    },
});

serviceSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_CODE, { expiresIn: '7d' });
    return token
}


const Service = mongoose.model('Service', serviceSchema);

const validate = (data) => {
    const schema = Joi.object({
        title: Joi.string().required().label('title'),
        desciption: Joi.string().required().label('desciption'),
        Price: Joi.number().required().label('Price'),
    });
    return schema.validate(data);
};


module.exports = { Service, validate }