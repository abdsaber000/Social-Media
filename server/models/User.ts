import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username :{
        type: String,
        require: true,
        min : 3,
        max : 20,
        unique : true,
    },
    email : {
        type : String,
        require : true,
        min : 5,
        max : 50,
        unique : true,
    },
    password : {
        type : String,
        require : true,
        min : 6
    },
    profilePic : {
        type: String,
        default : ""
    },
    profileCov : {
        type : String,
        default : ""
    },
    followers : {
        type : Array,
        default : []
    },
    followings : {
        type : Array,
        default : []
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
},
    {
       timestamps : true 
    }
);

export default mongoose.model('User' , UserSchema);