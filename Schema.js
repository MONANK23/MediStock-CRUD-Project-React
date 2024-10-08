const mongoose = require('mongoose');

const schema = mongoose.Schema({
    "name": String,
    "avatar": String,
    "MenufactureName": String,
    "id": Number,
    "Price":Number
})

module.exports = mongoose.model("Product",schema,"Product")