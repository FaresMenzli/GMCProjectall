const express=require("express")
require("dotenv").config();
const connectDB=require("./config/connectDB")
const mongoose=require("mongoose")
const produit =require("./routes/produit")
const Prod = require("./Models/produit")
const user = require("./routes/user")
require("dotenv").config();
const app=express()

// 4-bodyparse
app.use(express.json())
//3 route
app.use("/api/produits",produit)
app.use('/api/user',user)

/*app.get('/',(req,res)=>{

    console.log("getting list")
    Prod.find({})
    .then(doc=>{
        console.log(doc)
        res.send(doc)
    })
    .catch(err=>{
        console.error(err)
    })

}) */
//2-connectdb
connectDB()

//1-run server
const port = process.env.PORT || 2712 
app.listen(port,err=>err?console.error(err):console.log("the server is running port: "+port))