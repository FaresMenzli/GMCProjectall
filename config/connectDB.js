const mongoose=require("mongoose")
const config=require("config")
const MONGO_URI=config.get("MONGO_URI")
const connectDB =()=>{

    mongoose.connect(MONGO_URI,
        {useNewUrlParser:true,
         useUnifiedTopology:true,
         useFindAndModify:false
        }, 
        err => err ? console.error(err):console.log("Mongoose connected")
        );
 
 





}
module.exports = connectDB