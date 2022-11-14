const express = require("express")
const OrderController = require('../controllers/orderController/OrderController')
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     order:
 *       type: object
 *       required:
 *         - food_id
 *         - qty
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the order
 *         food_id:
 *           type: string
 *           description: The from foods collection id
 *         qty:
 *           type: number
 *           description: The food quantity
 *       example:
 *         food_id: 636f5b84949dd724ecf714f6
 *         qty: 5
 */
/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: The order managing API
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *       200:
 *         description: The order was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order'
 *       500:
 *         description: Some server error
 */
router.route('/').post(OrderController.createOrder)  // create orders routes

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/order'
 */
router.route('/').get(OrderController.fineOrders);   // get all orders
module.exports = router;