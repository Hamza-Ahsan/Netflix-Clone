import React from "react";
import Navbar from "../Components/Navbar";
import "./Profile.css";
import avatar from "../Images/avatar.png";
import { auth } from "../Requesting API/firebase";
import Plans from "../Components/Plans";

function Profile() {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={avatar} alt="Avatar logo" />
          <div className="profile__detail">
            <h2>{auth.currentUser.email}</h2>
            <div className="profile__plan">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
