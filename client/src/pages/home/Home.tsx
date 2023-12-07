import React from "react";
import Tobpar from "../../components/topbar/Tobpar";
import Leftbar from "../../components/leftbar/leftbar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";
import "./home.css";
export default function Home () {
    return (
        <div>
            <Tobpar />
            <div className="home-container">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}