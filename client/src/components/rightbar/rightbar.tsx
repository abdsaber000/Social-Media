import React from "react";
import "./rightbar.css";
export default function Rightbar() {
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
                <li className="rightbar-online-friend">
                    <img
                        className="rightbar-online-friend-img"
                        src="/assets/65192417_2155885274540052_2351479742563090432_n.jpg"
                        alt=""
                    />
                    <span className="rightbar-online-status"></span>
                    <span className="rightbar-online-friend-name">
                        Abdu Saber
                    </span>
                </li>

                <li className="rightbar-online-friend">
                    <img
                        className="rightbar-online-friend-img"
                        src="/assets/65192417_2155885274540052_2351479742563090432_n.jpg"
                        alt=""
                    />
                    <span className="rightbar-online-status"></span>
                    <span className="rightbar-online-friend-name">
                        Abdu Saber
                    </span>
                </li>
            </ul>
        </div>
    );
}
