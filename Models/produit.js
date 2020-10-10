const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProduitSchema = new Schema ({
    Name:String,
    Category:String,
    Prix:String,
    Description:String,
    Photo:String
})
module.exports=mongoose.model('product',ProduitSchema)