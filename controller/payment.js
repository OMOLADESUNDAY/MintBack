const User=require('../model/userSchema')
const Product=require('../model/productSchema')
const Withdraw=require('../model/withdraw')
const getPayment=async(req,res)=>{
    const {userId,transactionResponse,asset,totalPrice,etherPrice}=req.body
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


const makeWithdrawal=async(req,res)=>{
  try {
    const {userAddress,amountWitdraw,paymentMethod,WithdrawalId,amountInEth}=req.body
    const withdraw= await Withdraw.create({userAddress,amountWitdraw,paymentMethod,WithdrawalId,amountInEth})
    res.send(withdraw)
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getSingleWithdraw=async(req,res)=>{
  try {
    const {id}=req.params
    const cursor =await Withdraw.find({ WithdrawalId: { $eq: id }});
    if(cursor){
      res.send(cursor)
    }
    else{
      res.send([]);
    }
// }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports={getPayment,deleteProductOnPayment,makeWithdrawal,getSingleWithdraw}


