import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
  School,
} from "@mui/icons-material";

import Alex from "../../assets/images/person/Alex.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={Alex} alt="jane" />
            <span className="sidebarFriendName">Jame Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
