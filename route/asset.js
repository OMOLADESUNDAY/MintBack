const express=require("express")

const assetRouter=express.Router()
const {getAsset}=require('../controller/asset.js')
assetRouter.get('/user/:id',getAsset)

module.exports={assetRouter}