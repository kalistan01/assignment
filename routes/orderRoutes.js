const express = require("express")
const OrderController = require('../controllers/orderController/OrderController')
const router = express.Router();
router.route('/orders/')
    .post(OrderController.createOrder)  // create orders routes
    .get(OrderController.fineOrders);   // get all orders
module.exports = router;