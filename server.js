const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const foodsRoutes = require('./routes/foodRoutes')
const ordersRoutes = require('./routes/orderRoutes')


app.use(cors());
app.use(express.json());

//  database connection
mongoose.connect("mongodb://localhost:27017/shoutOut", {
    useNewUrlParser: true
}, (err) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
    else
    console.log('Connected ...');}
)
//routes
app.use("/foods", foodsRoutes);// food Routes
app.use("/orders", ordersRoutes); //order Routes


// create server
const PORT = 5000;
app.listen(PORT, () => console.log(`server running PORT ${PORT}`))
