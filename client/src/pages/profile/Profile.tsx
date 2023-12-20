import React from "react";
import "./profile.css";
import Tobpar from "../../components/topbar/Tobpar";
import Leftbar from "../../components/leftbar/leftbar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import { Posts, Users } from "../../testData";
export default function Profile() {
    return (
        <div>
            <Tobpar />
            <div className="profile-container">
                <Leftbar />
                <div className="profile-right-side">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img
                                src="/assets/cover.jpg"
                                alt=""
                                className="profile-cover-img"
                            />

                            <img
                                src="/assets/65192417_2155885274540052_2351479742563090432_n.jpg"
                                alt=""
                                className="profile-user-img"
                            />
                        </div>

                        <div className="profile-info">
                            <h4 className = "profile-user-name">Abdulrahman Saber</h4>
                            <span className="profile-user-desc">This is just for testing</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed Posts={Posts} />
                        <Rightbar Users={Users} />
                    </div>
                </div>
            </div>
        </div>
    );
}
