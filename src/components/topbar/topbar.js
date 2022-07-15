import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social App</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search />
          <input
            className="searchInput"
            type="text"
            placeholder="Search for friends, post or video"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
          <img src="/public/assets/gift.png" alt="man" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
