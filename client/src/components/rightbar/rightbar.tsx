import React from "react";
import "./rightbar.css";
import OnlineFriend from "../OnlineFriend/OnlineFriend";

interface User{
    id : number,
    profilePicture : string,
    username : string
}

interface Props{
    Users : User[]
}

export default function Rightbar({Users} : Props) {
    return (
        <div className="rightbar">
            <div className="rightbar-profile">
                <h3 className="rightbar-profile-title">Your Profile</h3>
                <div className="right-profile-user">
                    <img
                        className="rightbar-profile-img"
                        src="/assets/65192417_2155885274540052_2351479742563090432_n.jpg"
                        alt=""
                    />
                    <span className="rightbar-profile-name">Abdu</span>
                </div>
            </div>

            <hr className="rightbar-hr" />

            <div className="rightbar-birthday">
                <b>Abdo Saber</b> and 3 others having a birthday.
            </div>

            <hr className="rightbar-hr" />

            <h3 className="rightbar-online-friends-title">Online Friends</h3>
            <ul className="rightbar-online-friends-list">
                {
                    Users.map(user => <OnlineFriend key={user.id} User={user} />)
                }
                
            </ul>
        </div>
    );
}
