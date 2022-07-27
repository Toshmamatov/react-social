import React, { useState } from "react";

import "./post.css";
// import Lily from "../../assets/images/person/Lily.jpeg";
// import StationImg from "../../assets/images/post/1.jpeg";
// import Like from "../../assets/images/like.png";
// import Heart from "../../assets/images/heart.png";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyDaata";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="lily"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.photo} alt="station" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="postLikeIcon"
              src={`${PF}images/like.png`}
              onClick={likeHandler}
              alt="like"
            />
            <img
              className="postLikeIcon"
              src={`${PF}images/heart.png`}
              onClick={likeHandler}
              alt="heart"
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
