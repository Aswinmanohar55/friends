const mongoose=require("mongoose")


let pSchema=mongoose.Schema({

    friendsname:String,
 friendnickname:String,
    describyoufriend:String,
    contactno:String,
    emailid:String
})
let pModel=mongoose.model("friends",pSchema)
module.exports=pModel