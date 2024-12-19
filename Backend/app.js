const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();
const userRoutes=require('./routes/user.routes');

//connection with backend
const connectToDb=require('./DB/db');
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use('/users',userRoutes);

module.exports=app;