import "./profile.css";

import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/images/post/3.jpeg"
                alt="nature"
              />
              <img
                className="profileUserImg"
                src="assets/images/person/Alex.jpeg"
                alt="nature"
              />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Sam Wilson</h4>
            <p className="profileInfoDesc">Hello my friends!</p>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
