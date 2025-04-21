const mongoose = require('mongoose');

//initialize our schema
const carSchema = mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    registration: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Car', carSchema);
