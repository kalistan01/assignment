const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const foodsRoutes = require('./routes/foodRoutes')
const ordersRoutes = require('./routes/orderRoutes')


app.use(cors());
app.use(express.json());

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "assignment",
            version: "1.0.0",
            description: "A simple  API",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

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
