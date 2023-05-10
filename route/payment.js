const express=require("express")

const paymentRouter=express.Router()
const {getPayment,deleteProductOnPayment}=require('../controller/payment.js')
paymentRouter.post('/transaction',getPayment)
paymentRouter.delete('/removeProduct/:id',deleteProductOnPayment)

module.exports={paymentRouter}