import React, { useState } from "react";
import "./AccountSettings.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import AccountSettingsConfirmation from "../../Components/confirmation-messages/AccountSettingsConfirmation";

const AccountSettings = ({ user, setDP, setBio }) => {
  const [calendarPrivacy, setCalendarPrivacy] = useState("public");
  const [newBio, setNewBio] = useState("");
  const [changesSaved, saveChanges] = useState(false);

  const handleCalendarPrivacy = () => {
    if (calendarPrivacy === "public") {
      setCalendarPrivacy("private");
    } else {
      setCalendarPrivacy("public");
    }
  };

  const handleChanges = () => {
    saveChanges(true);
    setTimeout(() => {
      saveChanges(false);
    }, 1500);
  };

  const handleDPChange = (e) => {
    setDP(URL.createObjectURL(e.target.files[0]));
    handleChanges();
  };

  const getNewBio = (e) => {
    setNewBio(e.target.value);
  };

  const handleBioChange = () => {
    setBio(newBio);
    handleChanges();
  };

  return (
    <div className="account-settings-page">
      <h2 className="account-settings-heading">Account Settings</h2>
      <div className="top-buttons-container">
        <Button
          className="calendar-privacy-button"
          variant="outlined"
          onClick={handleCalendarPrivacy}
        >
          Set Calendar to {calendarPrivacy}
        </Button>
        <Button className="change-password-button" variant="contained">
          Change Password
        </Button>
      </div>
      <div className="edit-bio">
        <TextField
          id="bio"
          label="Edit bio"
          variant="outlined"
          multiline
          minRows={5}
          sx={{ minWidth: 310, borderRadius: "0px" }}
          value={newBio}
          onChange={getNewBio}
        />
      </div>
      <div className="bottom-buttons-container">
        <Button
          className="change-bio-button"
          variant="contained"
          onClick={handleBioChange}
        >
          Change Bio
        </Button>
        <Button
          className="change-profile-picture-button"
          variant="contained"
          component="label"
        >
          Change Profile Picture
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleDPChange}
          />
        </Button>
        <Button
          className="cancel-button"
          variant="outlined"
          component={Link}
          to="/profile"
        >
          Cancel
        </Button>
        <AccountSettingsConfirmation changesSaved={changesSaved} />
      </div>
    </div>
  );
};

export default AccountSettings;
