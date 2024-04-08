const productModel = require('../models/productModel')

//get products API-/api/v1/products
exports.getProducts=async (req,res,next)=>
{
   const products = await productModel.find({})
   res.json({
    success:true,
    products
   }) 
}

//get singleproduct API-/api/v1/product/:id
exports.getSingleProduct=async(req,res,next)=>
{
   try{
        console.log(req.params.id, 'ID');
       const product = await productModel.findById(req.params.id)
       res.json({
       success:true,
       product
       })
      }
      catch(e)
      {
         res.status(404).json({
            success:false,
            message:e.message
            })
      }
 
}