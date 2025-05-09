require('dotenv').config()
const express = require('express')
const app = express()
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/ai',aiRoutes)

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(4000,()=>{
    console.log('server running on port 4000')
})