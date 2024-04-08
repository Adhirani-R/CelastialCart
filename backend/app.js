const express = require("express")
const app = express()
const dotenv=require("dotenv")
const path=require("path")
const connectdDB=require('./config/connectdDB')
dotenv.config({path:path.join(__dirname,'config', 'config.env')})

const products=require('./routes/product')
const orders=require('./routes/order')

connectdDB();

app.use(express.json())
app.use('/api/v1',products)
app.use('/api/v1',orders)

app.listen(process.env.PORT, (req,res) =>
{
    console.log(`Server started and listening to PORT ${process.env.PORT} in ${process.env.NODE_ENV}`)
})