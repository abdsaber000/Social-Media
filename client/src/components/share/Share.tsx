import React from 'react';
import './Share.css';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons";

export default function Share() {
    return (
        <div className= "share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img className= "share-profile-img" 
                    src = "/assets/65192417_2155885274540052_2351479742563090432_n.jpg" 
                    alt = "" />
                    <input placeholder="what's in your mind?" className="share-top-text" />
                </div>
                <hr className="share-hr"/>
                <div className="share-bottom">
                    <div className="share-option">
                        <PermMedia className="share-option-icon" />
                        <span className="share-option-text">Photo or Video</span>
                    </div>

                    <div className="share-option">
                        <Label className="share-option-icon" />
                        <span className="share-option-text">Tag</span>
                    </div>


                    <div className="share-option">
                        <Room className="share-option-icon" />
                        <span className="share-option-text">Location</span>
                    </div>

                    <div className="share-option">
                        <EmojiEmotions className="share-option-icon" />
                        <span className="share-option-text">Feeling</span>
                    </div>

                    <button className="share-button">
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}
