import mongoose , {Document} from "mongoose";
import {Relationships} from '../enums/relationships';

interface IUser{
    username : string,
    email : string,
    password : string,
    description : string,
    followings : Array<mongoose.Types.ObjectId>,
    followers : Array<mongoose.Types.ObjectId>,
    profilePic : string,
    profileCov : string,
    isAdmin : boolean,
    city : string,
    from : string,
    relationship : Relationships,
    createdAt : any
}

export interface IUserModel extends IUser , Document{};

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
        type : Array<mongoose.Types.ObjectId>,
        default : []
    },
    followings : {
        type : Array<mongoose.Types.ObjectId>,
        default : []
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    city : {
        type : String,
        max : 50
    },
    from : {
        type : String,
        max : 50
    },
    relationship : {
        type : Number,
        enum : Relationships
    },
    description : {
        type : String,
        max : 100
    }

},
    {
       timestamps : true 
    }
);

export default mongoose.model<IUserModel>('User' , UserSchema);