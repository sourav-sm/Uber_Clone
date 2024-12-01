const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt'); 

const UserSchema=new mongoose.Schema({
     fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name atlest 3 character long']
        },
        lastname:{
            type:String,
            minlength:[3,'last name atlest 3 character long']
        }
     },
     email:{
          type:String,
          required:true,
          unique:true,
          minlength:[5,'email name atlest 5 character long']
     },
     password:{
        type:String,
        required:true,
        select:false
     },
     socketId:{
        type:String,
     }
})

modules.export=UserSchema;