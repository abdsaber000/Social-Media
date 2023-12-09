import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { PostI } from "../post/Post";
import "./feed.css";


interface Props{
    Posts : PostI[]
}
export default function Feed({Posts} : Props) {
    return (
        <div className="feed">
            <Share />
            {
                Posts.map(post => <Post key = {post.userId} Post = {post}/>)
            }
        </div>
    );
}
