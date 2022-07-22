import React from "react";
import "./post.css";
import Lily from "../../assets/images/person/Lily.jpeg";
import StationImg from "../../assets/images/post/1.jpeg";
import Like from "../../assets/images/like.png";
import Heart from "../../assets/images/heart.png";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Lily} alt="lily" />
            <span className="postUsername">Lily Jackson</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey it;s my first post</span>
          <img className="postImg" src={StationImg} alt="station" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={Like} alt="like" />
            <img src={Heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
