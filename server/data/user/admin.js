const mongoose = require ('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
});
module.exports = mongoose.model('Admin',adminSchema)