import React from "react";
import "./Post.css";
import { ThumbUp, MoreVert } from "@material-ui/icons";
import { Users } from "../../testData";
export interface PostI{
    id : number,
    desc : string,
    photo : string,
    date : string,
    userId : number,
    like : number,
    comment : number
}

interface Props {
    Post: PostI;
}

export default function Post({ Post }: Props) {
    const user = (Users.filter(user => user.id === Post.userId))[0]
    return (
        <div className="post">
            <div className="post-top">
                <div className="post-top-left">
                    <img
                        className="post-profile-img"
                        src={Post.photo}
                        alt=""
                    />

                    <span className="post-username">{user.username}</span>

                    <span className="post-date">{Post.date}</span>
                </div>

                <div className="post-top-right">
                    <MoreVert />
                </div>
            </div>

            <div className="post-center">
                <span className="post-text">{Post.desc}</span>
                <img
                    className="post-img"
                    src="/assets/65192417_2155885274540052_2351479742563090432_n.jpg"
                    alt=""
                />
            </div>

            <div className="post-bottom">
                <div className="post-bottom-left">
                    <ThumbUp className="post-like-icon" />
                    <span className="post-likes-counter">{Post.like} likes</span>
                </div>

                <div className="post-bottom-right">
                    <span className="post-comments-counter">{Post.comment} comments</span>
                </div>
            </div>
        </div>
    );
}
