const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        default: null,
    },
    otpExpiration: {
        type: Date,
        default: null,
    },
    isDelete:{
        type:Boolean,
        default:false
    }
}, { timestamps: true })
const user = mongoose.model('user', userSchema)
module.exports = { user }