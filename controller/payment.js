const User=require('../model/userSchema')
const Product=require('../model/productSchema')
const getPayment=async(req,res)=>{
    const {userId,transactionResponse,asset,totalPrice,etherPrice}=req.body
    console.log(asset)
    try {
        const user= await User.findByIdAndUpdate({_id:userId}, {
            $push: {
              'assets.asset': {
                $each: asset
              }
            }
          });
          
         res.status(200).send(user.assets.asset)
    } catch (error) {
        console.log(error)
    }
}
const deleteProductOnPayment= async(req, res) => {
  const productId = req.params.id;
  try {
    const deleteProduct=await Product.deleteOne({_id:productId})
    if(deleteProduct){
       res.send('deleted');
      }
  } catch (error) {
    res.send(error)
  }
};





module.exports={getPayment,deleteProductOnPayment}


