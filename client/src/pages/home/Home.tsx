import React from "react";
import Tobpar from "../../components/topbar/Tobpar";
import Leftbar from "../../components/leftbar/leftbar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";
import {Users , Posts} from "../../testData";
import "./home.css";
export default function Home () {
    return (
        <div>
            <Tobpar />
            <div className="home-container">
                <Leftbar />
                <Feed Posts = {Posts}/>
                <Rightbar Users={Users}/>
            </div>
        </div>
    )
}