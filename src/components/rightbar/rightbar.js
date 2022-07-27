import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyDaata";
import Online from "../online/online";

const Rightbar = ({ profile }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/images/gift.png"
            alt="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>5 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/images/ad.png" alt="ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4>User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}images/person/Munisa.jpeg`}
              alt="girl"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Billie Eilish</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}images/person/Alex.jpeg`}
              alt="girl"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Alex Malfoy</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}images/person/Jane.jpeg`}
              alt="girl"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jane Smith</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}images/person/Jack.jpeg`}
              alt="girl"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jack Wilson</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}images/person/Sabina.jpeg`}
              alt="girl"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Adrina </span>
          </div>

          <div className="rightbarFollowing">
            <img
              src={`${PF}images/person/Lily.jpeg`}
              alt="girl"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Billie</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
