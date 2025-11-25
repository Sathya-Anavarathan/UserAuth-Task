import mongoose from 'mongoose'


const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"],
        default:"Other"
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})
const User=mongoose.models.User || mongoose.model('User',userschema)


export default User;