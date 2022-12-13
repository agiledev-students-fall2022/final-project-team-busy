import React, { useState } from "react";
import "./ProfilePage.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import GroupsIcon from "@mui/icons-material/Groups";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const ProfilePage = ({ user, onLogout, defaultBio, defaultDP }) => {
  return (
    <div className="profile-page">
      <div className="heading-and-home-button-header">
        <div className="heading-and-username">
          <h2 className="profile-heading">Profile</h2>
          <span className="username">@{user.username}</span>
        </div>
        <div className="home-button">
          <IconButton aria-label="home" component={Link} to="/home">
            <HomeIcon
              sx={{ height: 45, width: 45, ":hover": { cursor: "pointer" } }}
            />
          </IconButton>
        </div>
      </div>
      <div className="profile-pic-container">
        <Avatar
          alt="Profile Picture"
            src={user.profilePic ? user.profilePic : defaultDP}
          sx={{
            width: 125,
            height: 125,
            bgcolor: deepOrange[500],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
          }}
        >
          {user.username[0]}
        </Avatar>
      </div>
      <h4 className="bio-heading">Bio: </h4>
      <section className="bio-text">{user.bio ? user.bio : defaultBio}</section>
      <div className="external-buttons">
        <Button
          variant="contained"
          className="account-settings-button"
          component={Link}
          to="/account-settings"
        >
          Account Settings
        </Button>
        <Button
          variant="contained"
          className="account-settings-button"
          onClick={onLogout}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
