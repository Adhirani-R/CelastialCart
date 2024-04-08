const ordertModel=require('../models/orderModel')

//create order -/api/v1/order
exports.createOrder=async (req,res,next)=>{
    // console.log(req.body, 'DATA');
    const cartItems=req.body
    const amount=Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2)
    console.log(amount, 'Amount');
    const status='pending';

    const order = await ordertModel.create({cartItems,amount,status})

    res.json({
        success:true,
        order
         })
}