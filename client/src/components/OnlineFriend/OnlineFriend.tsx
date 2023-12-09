import React from "react";
import "./OnlineFriend.css";
interface User{
    id : number,
    profilePicture : string,
    username : string
}

interface Props{
    User : User
}
export default function OnlineFriend({User} : Props) {
    return (
        <li className="rightbar-online-friend">
            <img
                className="rightbar-online-friend-img"
                src={User.profilePicture}
                alt=""
            />
            <span className="rightbar-online-status"></span>
            <span className="rightbar-online-friend-name">{User.username}</span>
        </li>
    );
}
