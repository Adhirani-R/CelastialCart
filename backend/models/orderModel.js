const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
   
})
const ordertModel=mongoose.model('order',orderSchema)
module.exports=ordertModel