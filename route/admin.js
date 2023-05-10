const express=require('express')
const adminrouter =express.Router()
const {createNewProduct,deleteProduct,updateProduct,deleteUser,getAllUser ,getAllProduct} =require('../controller/Admin.js')

adminrouter.post('/createnewproduct',createNewProduct)
adminrouter.patch('/update/:id',updateProduct)
adminrouter.delete('/delete/:id',deleteProduct)
adminrouter.get('/allproducts',getAllProduct)

adminrouter.delete('/deleteuser/:id',deleteUser)
adminrouter.get('/allusers',getAllUser)


module.exports={adminrouter}