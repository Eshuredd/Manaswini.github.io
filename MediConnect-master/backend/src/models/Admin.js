const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    domain: { type: String, required: true }, 
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;