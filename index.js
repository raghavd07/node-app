import express from 'express'
import dotenv from 'dotenv'
import productRouter from './routes/productRoute.js'
import dbConnect from './config/db.js'
dotenv.config()
const PORT=process.env.PORT
const app = express()
app.set("view engine","ejs")
app.set("views","views") //views of this project are saved in the views folder
const startServer=async()=>{
    await dbConnect()
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`)
    })
}
app.use('/admin/products',productRouter)
startServer()