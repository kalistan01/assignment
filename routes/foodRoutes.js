const express = require("express")
const FoodController = require('../controllers/foodController/FoodController')
const router = express.Router();
router.route('/foods/')
    .post(FoodController.createFood)    //create foods
    .get(FoodController.fineFoods);        //add foods to db
module.exports = router;

