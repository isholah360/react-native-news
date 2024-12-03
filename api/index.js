const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const Port = 4000 || process.env.Port
const User = require('./models/models')
const router = require('./routes/router')
const app = express()


app.use(cors());
app.use(express.json())
app.use(cookieParser())
dotenv.config()
User.createTable();

app.get('/', (req, res)=>{
    res.send("hello server")
})

app.use( "/api/auth", router)

app.listen(Port, ()=>{
    console.log(`Your news app is now running on ${Port}`)
})