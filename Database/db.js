require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.MONGO_URL;
console.log(url);
const databaseConnect = mongoose.connect(url).then(()=>{
    console.log("db connect");
}).catch(()=>{
    console.log("db failed");
})
module.exports = {databaseConnect}