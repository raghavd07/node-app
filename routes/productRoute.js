import express from 'express'
import {showProducts,addProductForm,addProduct,deleteProduct} from '../controllers/productController.js'
const productRouter = express.Router()
productRouter.get("/",showProducts)
productRouter.get("/add",addProductForm)
productRouter.post("/add",addProduct)
productRouter.get("/delete/:id",deleteProduct)
export default productRouter
