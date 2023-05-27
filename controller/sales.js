const Sale=require('../model/sales.js')
const User=require('../model/userSchema.js')


const getUserSales=async(req,res)=>{
  try {
    const {userId}=req.params 
    const cursor =await Sale.find({ userId: { $eq: userId }});
    if(cursor){
      res.send(cursor)
    }
    else{
      res.send([]);
    } 
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
  

}


const createNewSale=async(req, res) => {
      const {name,userId,price,description,image,ownerName}=req.body
        try { 
          const sale = await Sale.create({name,price,description,image,userId,ownerName}) 
          res.status(200).send(sale);
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    // };
 
const updateUserBalance=async(req,res)=>{
    
    try {
        const {userId}=req.params
        const {price}=req.body
        const findBalance=await User.findOne({_id:userId})
         const balance=findBalance.balance + price
         const updateBalance = await User.findByIdAndUpdate(userId, {balance}, { new: true });
         res.send(updateBalance)
    } catch (error) {
        res.send(error)
    }
}
const updateBalanceAfterWithdraw=async(req,res)=>{
  try {
    const {userId}=req.params
    const {withdrawPrice}=req.body
    const findBalance=await User.findOne({_id:userId})
     const balance=findBalance.balance - withdrawPrice
     const updateBalance = await User.findByIdAndUpdate(userId, {balance}, { new: true });
     res.send(updateBalance)
} catch (error) {
    res.send(error)
}
}
module.exports={createNewSale,updateUserBalance,updateBalanceAfterWithdraw,getUserSales}
