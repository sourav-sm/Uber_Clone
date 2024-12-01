const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();

//connection with backend
const connectToDb=require('./DB/db');
connectToDb();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello world');
})

module.exports=app;