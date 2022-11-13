const Foods = require('../../models/foods/Foods');

//create foods (post)
exports.createFood = async (req, res, next) => {

    try {
        let {food_name, price} = req.body;
        const foods = new Foods({food_name, price})
        let newFoods = await foods.save()
        res.status(201).json({
            message: "food added successfully",
            result: newFoods
        })

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// get all orders
exports.fineFoods = async (req, res, next) => {

    try {
        const foods = await Foods.find();
        res.status(200).json({
            foods: foods
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
