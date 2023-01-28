const express=require("express")

const mongoose=require("mongoose")

const cors=require("cors")

const bodyparser=require("body-parser")


const pModel=require("./model/friendsmodel")


var friend=express() 
friend.use(bodyparser.json())
friend.use(bodyparser.urlencoded({extended:true}))




friend.get("/",(req,res)=>{
    res.send("welcome")
})

 mongoose.connect("mongodb+srv://aswin:collage123@cluster0.e7ptdq4.mongodb.net/frienddb?retryWrites=true&w=majority",{useNewUrlParser:true})


friend.post("/add",async(req,res)=>{
    let data=new pModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
})


friend.get("/viewall",async(req,res)=>{
    let data=await pModel.find()

    res.send(data)
})

friend.listen(2500)