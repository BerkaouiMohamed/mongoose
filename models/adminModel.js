const mongoose  = require("mongoose")

const adminSchema=new mongoose.Schema({
    name:String,
    age:Number,

    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum: ["admin","user"]
    }
},{
    versionKey: false ,

    // You should be aware of the outcome after set to false
})

const adminModel=mongoose.model("admin",adminSchema)

 
module.exports=adminModel 