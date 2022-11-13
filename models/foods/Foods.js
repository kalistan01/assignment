const mongoose = require('mongoose')
//create schema
const foodsSchema = new mongoose.Schema({
    food_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    addDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('foods', foodsSchema)