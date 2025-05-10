const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {type: String, require: true},
    loanAmount: {type: Number, require: true},
    loanTenure: {type: String, require: true},
    employmentStatus: {type: String, require: true},
    employmentAddress: {type: String, require: true},
    reason: {type: String, require: true},
    status: {type: String},
    loanOfficer: {type: String}
}, {timestamps: true})


module.exports = mongoose.model('User', userSchema)