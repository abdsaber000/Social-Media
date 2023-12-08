import React from "react";
import {RssFeed , 
    Chat ,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    QuestionAnswer,} from "@material-ui/icons";

import "./leftbar.css"
export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbar-wrapper">
                <li className="leftbar-list">

                    <li className = "leftbar-list-item">
                        <RssFeed className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Feed
                        </span>
                    </li>

                    <li className = "leftbar-list-item">
                        <Chat className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Chats
                        </span>
                    </li>


                    <li className = "leftbar-list-item">
                        <PlayCircleFilledOutlined className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Videos
                        </span>
                    </li>

                    <li className = "leftbar-list-item">
                        <Group className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Groups
                        </span>
                    </li>


                    <li className = "leftbar-list-item">
                        <Bookmark className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Bookmarks
                        </span>
                    </li>


                    <li className = "leftbar-list-item">
                        <HelpOutline className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Questions
                        </span>
                    </li>

                    <li className = "leftbar-list-item">
                        <WorkOutline className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Jobs
                        </span>
                    </li>

                    <li className = "leftbar-list-item">
                        <Event className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Events
                        </span>
                    </li>

                    <li className = "leftbar-list-item">
                        <School className = "leftbar-icon" />
                        <span className="leftbar-item-text">
                            Courses
                        </span>
                    </li>
                </li>
                <button className="leftbar-button">Show More</button>
                <hr className="leftbar-hr" />

                <ul className="leftbar-friends-list">
                    <li className="leftbar-friend">
                        <img className="leftbar-friend-img" 
                        src = "/assets/65192417_2155885274540052_2351479742563090432_n.jpg" 
                        alt = "" />
                        <span className="leftbar-friend-name">Abdu</span>
                    </li>
                </ul>


                <ul className="leftbar-friends-list">
                    <li className="leftbar-friend">
                        <img className="leftbar-friend-img" 
                        src = "/assets/65192417_2155885274540052_2351479742563090432_n.jpg" 
                        alt = "" />
                        <span className="leftbar-friend-name">Abdu</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}