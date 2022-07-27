import "./closeFriends.css";

const CloseFriends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={user.profilePicture}
          alt="jane"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};
export default CloseFriends;
