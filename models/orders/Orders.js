const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    food_id: {
        type: String,
        required: true,
        ref: "foods" // refer food_id from foods collection
    },
    qty: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('orders', orderSchema)