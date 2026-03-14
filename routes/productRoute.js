import express from 'express'
import {showProducts,addProductForm,addProduct} from '../controllers/productController.js'
const productRouter = express.Router()
productRouter.get("/",showProducts)
productRouter.get("/add",addProductForm)
productRouter.post("/add",addProduct)
export default productRouter
