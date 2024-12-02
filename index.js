const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const Port = 4000 || process.env.Port
const User = require('./api/models/models')
const router = require('./api/routes/router')
const app = express()


// app.use(cors({
//     origin: 'http://10.0.2.2:3000',  
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   }));
app.use(express.json())
app.use(cookieParser())
app.use(cors());
dotenv.config()
User.createTable();


app.use( "/api/auth", router)

app.listen(Port, ()=>{
    console.log(`Your news app is now running on ${Port}`)
})