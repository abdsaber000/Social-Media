import React from "react";
import {Person , Chat , Notifications , Search} from "@material-ui/icons";
import "./Tobpar.css";

export default function Tobpar() {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <div className="logo">Social Media</div>
            </div>

            <div className="topbar-center">
                <div className="search-bar">
                    <Search className = "search-icon" />
                    <input placeholder="search... " className = "search-input" />
                </div>
            </div>

            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Timeline</span>
                    <span className="topbar-link">Homepage</span>
                </div>

                <div className="topbar-icons">
                    <div className="topbar-icon-items">
                        <Person />
                        <span className="topbar-icon-badge">1</span>
                    </div>

                    <div className="topbar-icon-items">
                        <Chat />
                        <span className="topbar-icon-badge">1</span>
                    </div>

                    <div className="topbar-icon-items">
                        <Notifications />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                </div>

                <img src= "/assets/65192417_2155885274540052_2351479742563090432_n.jpg" 
                    className = "topbar-pic" alt = "" />

            </div>

        </div>
    )
}