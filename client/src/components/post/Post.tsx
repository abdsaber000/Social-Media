import React from 'react'
import "./Post.css";
import {ThumbUp , MoreVert} from "@material-ui/icons"
export default function Post() {
    return (
        <div className = "post">
            <div className="post-top">
                <div className="post-top-left">
                    <img className= "post-profile-img" 
                        src = "/assets/65192417_2155885274540052_2351479742563090432_n.jpg" 
                        alt = "" />

                    <span className="post-username">
                        Abdulrahman
                    </span>

                    <span className="post-date">
                        8-12-2023
                    </span>
                </div>

                <div className="post-top-right">
                    <MoreVert />
                </div>
            </div>

            <div className="post-center">
                <span className="post-text">Hello Everyone in this video</span>
                <img className= "post-img" 
                    src = "/assets/65192417_2155885274540052_2351479742563090432_n.jpg" 
                    alt = "" />
            </div>

            <div className="post-bottom">
                <div className="post-bottom-left">
                    <ThumbUp className = "post-like-icon" />
                    <span className="post-likes-counter">9 likes</span>
                </div>

                <div className="post-bottom-right">
                    <span className="post-comments-counter">9 comments</span>

                </div>
            </div>

        </div>
    )
}
