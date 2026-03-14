import express from 'express'
import {showProducts,addProductForm} from '../controllers/productController.js'
const productRouter = express.Router()
productRouter.get("/",showProducts)
productRouter.get("/add",addProductForm)
export default productRouter