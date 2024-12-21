const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken'); 


const CaptainSchema=new mongoose.Schema({
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
        lowercase:true,
        minlength:[5,'email name atlest 5 character long']
    },
    password:{
        type:String,
        required:true,
        select:false,//if we find user then bydefault password will not go
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color name atlest 3 character long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate number atlest 3 character long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'capacity should be minimum of 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['motorcycle','car','auto']
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }

})

CaptainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

CaptainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

CaptainSchema.statics.hashPassword=async function (password){
    return await bcrypt.hash(password,10);
}

const captainModel=mongoose.model('captain',CaptainSchema);

module.exports=captainModel;