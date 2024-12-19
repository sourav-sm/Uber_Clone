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
        select:false,//if we find user then bydefault password will not go
     },
     socketId:{
        type:String,
     }
})

//token genration
UserSchema.methods.generateAuthToken=function(){
   const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
   return token;
}

//compare password
UserSchema.methods.comparePassword=async function(password){
   return await bcrypt.compare(password,this.password);
}

UserSchema.statics.hashPassword=async function (password){
   return await bcrypt.hash(password,10);
}



const userModel=mongoose.model('user',UserSchema);

module.exports=userModel;