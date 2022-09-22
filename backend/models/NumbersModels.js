const mongoose = require('mongoose');

const numbersTemplate = new mongoose.Schema({
    number:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mytable', numbersTemplate)
