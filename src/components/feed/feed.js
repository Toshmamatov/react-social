import React from "react";
import Post from "../post/post";
import Share from "../share/share";
import "./feed.css";
import { Posts } from "../../dummyDaata";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
