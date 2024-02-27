const express = require('express');
const mongoose = require('mongoose');
const adminModel = require('./models/adminModel');
 mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(()=>console.log("connected to db"))

const app = express(); 
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async(req,res)=>{
    const admnis=await adminModel.find()
    res.json(admnis)
})

app.post('/',async(req,res)=>{
    const data=req.body
    console.log(data);
const newAdmin=await adminModel.create(data)
 
    res.json(newAdmin)   
})
app.put('/:id',async(req,res)=>{
    const data=req.body
    const param=req.params.id
   
await adminModel.findByIdAndUpdate(param,data)
 
    res.json("success")   
})
 
app.use(express.json()); 


mongoose.connection.once('open',()=>{
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
})
