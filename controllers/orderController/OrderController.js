const Orders = require('../../models/orders/Orders');

//create orders
exports.createOrder = async (req, res, next) => {
    try {
        let {food_id, qty} = req.body;
        const orders = new Orders({food_id, qty})
        let newOrders = await orders.save()
        res.status(201).json({
            message: "order created successfully",
            newOrders: newOrders
        })
    } catch (error) {
        res.status(400).json({
            message: error.message})
    }
}
//get all orders
exports.fineOrders = async (req, res, next) => {
    try {
        //find all orders and join collections
        const orders = await Orders.find().populate({
            path: "food_id",
            select: [
                "food_name"
            ]
        })
        res.status(200).json(orders)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
