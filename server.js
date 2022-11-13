const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

app.use(cors());
app.use(express.json());


// create server
const PORT = 5000;
app.listen(PORT, () => console.log(`server running PORT ${PORT}`))
