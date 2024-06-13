const { databaseConnect } = require('./Database/db')
const userRoutes = require('./Routes/User')
const express = require('express')
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use(cors());
app.use(express.json());
app.use('/user',userRoutes)
databaseConnect.then(() => {
    app.listen(port, () => {
        console.log("server start=", port);
    })
})